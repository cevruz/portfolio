const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
    console.error('Images directory not found!');
    process.exit(1);
}

// Read files and generate responsive variants (320, 640, 1024) in WebP and JPEG
const sizes = [320, 640, 1024];

fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        const base = path.basename(file, ext);

        // Skip already-generated variants and webp files
        if (/-\d+$/.test(base) || ext === '.webp') return;

        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
            const inputFile = path.join(imagesDir, file);

            sizes.forEach(size => {
                const outJpg = path.join(imagesDir, `${base}-${size}.jpg`);
                const outWebp = path.join(imagesDir, `${base}-${size}.webp`);

                // Create JPEG resized
                sharp(inputFile)
                    .resize(size)
                    .jpeg({ quality: 80 })
                    .toFile(outJpg)
                    .then(info => console.log(`✅ ${path.basename(outJpg)} (${info.size} bytes)`))
                    .catch(err => console.error(`❌ Error creating ${outJpg}:`, err));

                // Create WebP resized
                sharp(inputFile)
                    .resize(size)
                    .webp({ quality: 80 })
                    .toFile(outWebp)
                    .then(info => console.log(`✅ ${path.basename(outWebp)} (${info.size} bytes)`))
                    .catch(err => console.error(`❌ Error creating ${outWebp}:`, err));
            });
        }
    });
});
