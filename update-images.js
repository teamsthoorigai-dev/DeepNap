const fs = require('fs');

const mattressIds = 'oI9hBgqyWO4,3AvEi1EoIyM,6abl43xbcx8,6qxUg4jTWdE,SQiphwgkA00,GJW6b9vim1s,W1rK4mBImv4,nWt1z1Ue86k,Ux34Y9hv6dI,ON42LgKN_jc,I8kTKM17Ktc,7sbItmu95aA,xfIxrDcVtBA'.split(',');
const bedIds = '0dJA53GaIl0,-R2uNyGmeM4,DE9MM2voqKc,7cMA-REKnY4,gVKmonDbotU,iAftdIcgpFc,Z56eN0CGtyk,9FxMLK0cXBM'.split(',');

function replaceInFile(filePath, ids) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let i = 0;
    content = content.replace(/image:\s*"https:\/\/images\.unsplash\.com\/photo-[^?]+\?[^"]+"/g, (match) => {
        const id = ids[i % ids.length];
        i++;
        return `image: "https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800"`;
    });
    fs.writeFileSync(filePath, content);
}

replaceInFile('src/data/products.ts', mattressIds);
replaceInFile('src/data/cots.ts', bedIds);
console.log('Images replaced!');
