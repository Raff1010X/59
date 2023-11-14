const fs = require('fs');
const path = require('path');

const jsonDir = path.join(__dirname, '../../src/assets/images/blurred');

(function mergeJSON() {
    let mergedData = [];
    fs.readdir(jsonDir, (err, items) => {
        if (err) {
            return console.error('Unable to scan directory: ' + err);
        }

        items.forEach((file) => {
            const filePath = path.join(jsonDir, file);
            if (fs.statSync(filePath).isFile() && path.extname(file) === '.json') {
                const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                mergedData.push(data);
                fs.rmSync(filePath);
            }
        });
        fs.writeFileSync(path.join(jsonDir, 'images.json'), JSON.stringify(mergedData, null, 2));

    });
})();