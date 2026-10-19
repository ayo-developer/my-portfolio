// scripts/generate-images.js
// Usage: node scripts/generate-images.js path/to/source.jpg outputBaseName
// Example: node scripts/generate-images.js images/originals/profile.jpg profile
// Produces images/<outputBaseName>-1200.jpg, -800.jpg, -400.jpg
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

if (process.argv.length < 4) {
    console.error('Usage: node generate-images.js <source-path> <output-base-name>');
    process.exit(1);
}

const source = process.argv[2];
const base = process.argv[3];
const outdir = path.join(__dirname, '..', 'images');

const sizes = [
    { suffix: '1200', width: 1200 },
    { suffix: '800', width: 800 },
    { suffix: '400', width: 400 }
];

(async () => {
    if (!fs.existsSync(source)) {
        console.error('Source file not found:', source);
        process.exit(1);
    }
    if (!fs.existsSync(outdir)) fs.mkdirSync(outdir, { recursive: true });

    for (const s of sizes) {
        const out = path.join(outdir, `${base}-${s.suffix}.jpg`);
        await sharp(source)
            .resize({ width: s.width })
            .jpeg({ quality: 82, chromaSubsampling: '4:4:4' })
            .toFile(out);
        console.log('Written', out);
    }
})();