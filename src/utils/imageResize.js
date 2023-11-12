// Description: Script for resizing images in public/images-src directory
// Usage: node src/utils/imageResize.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const imagesDir = path.join(__dirname, '../../public/images-src');
const imagesOut = path.join(__dirname, '../../public/images');
const widths = [300, 600, 900, 1200];
const types = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

function createDirectory(directory) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }
}

function deleteDirectory(directory) {
    if (fs.existsSync(directory)) {
        fs.rmSync(directory, { recursive: true });
    }
}

(function createDirectoriesStructure() {
    deleteDirectory(imagesOut);
    createDirectory(imagesOut);
    fs.readdir(imagesDir, (err, items) => {
        if (err) {
            console.error('Błąd odczytu katalogu:', err);
            return;
        }

        items.forEach(item => {

            if (item.includes('not-used'))
                return;

            const itemPath = path.join(imagesDir, item);

            fs.stat(itemPath, (err, stats) => {
                if (err) {
                    console.error('Błąd odczytu statystyk pliku:', err);
                    return;
                }

                if (stats.isDirectory()) {
                    createDirectory(path.join(imagesOut, item));
                }
            });
        });
    });
})();

(function processDirectory(directory) {
    fs.readdir(directory, (err, items) => {
        if (err) {
            console.error('Błąd odczytu katalogu:', err);
            return;
        }

        items.forEach(item => {
            const itemPath = path.join(directory, item);

            if (item.includes('not-used'))
                return;

            fs.stat(itemPath, (err, stats) => {
                if (err) {
                    console.error('Błąd odczytu statystyk pliku:', err);
                    return;
                }

                if (stats.isDirectory()) {
                    processDirectory(itemPath);
                } else if (stats.isFile()) {
                    processFile(itemPath);
                }
            });
        });
    });
})(imagesDir);

async function processFile(file, directory = imagesOut) {

    const fileWidth = await sharp(file).metadata().then(metadata => metadata.width);
    const minImageWidth = widths[0];
    const baseWidth = widths[widths.length - 1];
    const extension = path.extname(file).toLowerCase().replace('.', '');

    if (types.includes(extension)) {
        let outPath = file.replace(imagesDir, directory).replace(extension, 'webp');

        // save file as base64 data 10px wide for lazy loading
        await sharp(file)
            .resize(10)
            .toBuffer()
            .then(data => {
                const base64 = `data:image/${extension};base64,${data.toString('base64')}`;
                const base64Path = outPath.replace('.webp', '.txt');
                fs.writeFileSync(base64Path, base64, err => {
                    if (err) {
                        console.error('Błąd przy zapisie pliku:', err);
                        return;
                    }
                    console.log('Plik zapisany:', base64Path);
                });
            })
            .catch(err => {
                console.error('Błąd przy przetwarzaniu pliku:', err);
            });

            // save file as webp
        widths.forEach(async (width) => {
            let aspectRatio = fileWidth;
            let path = outPath;

            if (fileWidth >= minImageWidth) {
                aspectRatio = Math.round((width / baseWidth) * fileWidth);
                path = outPath.replace('.webp', `-${width}.webp`);
            }

            sharp(file)
                .resize(aspectRatio)
                .toFile(path, (err, info) => {
                    if (err) {
                        console.error('Błąd przy przetwarzaniu pliku:', err);
                        return;
                    }
                    console.log('Plik przetworzony:', info);
                });

            if (fileWidth < minImageWidth && width > widths[0]) {
                return;
            }
        });
    }

}