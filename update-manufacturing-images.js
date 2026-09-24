const fs = require('fs');
const glob = require('fs').promises;
const path = require('path');

const factoryIds = 'n9r0S3zfoMc,pWUyHVJgLhg,SLIFI67jv5k,9GwMIek9jnY,ABNgkiVCsoo,8gr6bObQLOI,2PJMDIgK9EA,HpPmiduLDC0,7Az9gLFn6ek,KP6XQIEjjPA,-HMzD04xgFY,MS9Tnh3if1o,QFQ6vsou7XA,qJk_ugPWpd4'.split(',');

async function replaceInDir(dir) {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    let i = 0;
    
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await replaceInDir(fullPath);
        } else if (entry.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts'))) {
            let content = await fs.promises.readFile(fullPath, 'utf-8');
            let originalContent = content;
            
            content = content.replace(/1634546592231-15582fcc978a/g, (match) => {
                const id = factoryIds[i % factoryIds.length];
                i++;
                return id;
            });
            
            if (content !== originalContent) {
                await fs.promises.writeFile(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replaceInDir('src').then(() => console.log('Done!'));
