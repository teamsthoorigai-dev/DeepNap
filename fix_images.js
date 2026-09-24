const fs = require('fs');

const validImages = [
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1536882240095-0379873feb4e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800'
];

function fixImages(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let counter = 0;
  content = content.replace(/image:\s*"https:\/\/images\.unsplash\.com\/[^"]+"/g, (match) => {
    const newImg = validImages[counter % validImages.length];
    counter++;
    return 'image: "' + newImg + '"';
  });
  fs.writeFileSync(filePath, content, 'utf-8');
}

fixImages('src/data/products.ts');
fixImages('src/data/cots.ts');
console.log('Images fixed successfully!');
