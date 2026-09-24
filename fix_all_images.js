const fs = require('fs');
const path = require('path');

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

let counter = 0;

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
       walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
       let content = fs.readFileSync(fullPath, 'utf-8');
       let changed = false;
       content = content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]{11}\?/g, (match) => {
         changed = true;
         const newImg = validImages[counter % validImages.length].split('?')[0] + '?'; // keep the '?'
         counter++;
         return newImg;
       });
       if (changed) {
         fs.writeFileSync(fullPath, content, 'utf-8');
         console.log('Fixed:', fullPath);
       }
    }
  });
}

walkDir('src');
console.log('Global image replacement complete!');
