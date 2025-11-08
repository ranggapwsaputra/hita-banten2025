const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images/gallery/funcamp/photos');
const outputDir = path.join(__dirname, '../public/images/gallery/funcamp/photos-resized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Process each jpg file
fs.readdirSync(inputDir)
    .filter(file => file.toLowerCase().endsWith('.jpg'))
    .forEach(file => {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);
        
        sharp(inputPath)
            .resize(400, 300, {
                fit: 'cover',
                position: 'center'
            })
            .toFile(outputPath)
            .then(() => console.log(`Resized: ${file}`))
            .catch(err => console.error(`Error processing ${file}:`, err));
    });