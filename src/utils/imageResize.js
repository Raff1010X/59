// Description: Script for resizing images in public/images-src directory
// Usage: node src/utils/imageResize.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const imagesDir = path.join(__dirname, '../../src/assets/images-src');
const imagesOut = path.join(__dirname, '../../public/images');
const jsonDir = path.join(__dirname, '../../src/assets/images/blurred');
const widths = [300, 600, 900, 1200];
const types = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
let couter = 0;

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

(function prosessImages() {
    deleteDirectory(jsonDir);
    createDirectory(jsonDir);
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
    processDirectory(imagesDir)
    console.log('Images processed');
})();

function processDirectory(directory) {
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
    })
};

async function processFile(file, directory = imagesOut) {

    const fileWidth = await sharp(file).metadata().then(metadata => metadata.width);
    const minImageWidth = widths[0];
    const baseWidth = widths[widths.length - 1];
    const extension = path.extname(file).toLowerCase().replace('.', '');

    if (types.includes(extension)) {

        // remove __dirname one level up from path
        let path = file.replace(imagesDir, '');
        console.log(path);


        let outPath = file.replace(imagesDir, directory).replace(extension, 'webp');
        const jsonPath =
            // save file as base64 data 10px wide for lazy loading
            await sharp(file)
                .resize(10)
                .toBuffer()
                .then(data => {
                    const base64 = `data:image/${extension};base64,${data.toString('base64')}`;
                    // save to json file for lazy loading
                    const jsonPath = jsonDir + '/' + couter + '.json';
                    couter++;
                    const json = JSON.stringify({ path, base64 });

                    fs.writeFileSync(jsonPath, json, err => {
                        if (err) {
                            console.error('Błąd przy zapisie pliku:', err);
                            return;
                        }
                        //console.log('Plik zapisany:', jsonPath);
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
                    //console.log('Plik przetworzony:', info);
                });

            if (fileWidth < minImageWidth && width > widths[0]) {
                return;
            }
        });
    }

}
