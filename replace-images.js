const fs = require('fs');
const path = require('path');

const targetAida = "https://lh3.googleusercontent.com/aida/AEtjO1VyBxylK-3YX6ydgNoyvEM6k3-IYwrftv2b1w8EZrMNWwbDHEkLstP3lfwBQYP1yub851HDJgdj69RnCc64OvsOlfotAmwM0jeiG3r3KclvcXmNSot3s41ZFJkA9ARlDaOFKM6CiXAnoZ--JguVEs1FujkWc23g5XeMUT_lpDTLNShJWVF5bpfC9-QwBsj2RnpdQu3p6n7kbB65ZfiH0PV9rQCy9H-Rj2JXODC904x_wiaYDaSq-YvcUfWf";
const targetPlaceholder = "/images/placeholder-mattress.jpg";

const mattressUrl = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800";
const materialsUrl = "https://images.unsplash.com/photo-1634546592231-15582fcc978a?auto=format&fit=crop&q=80&w=800";
const cotUrl = "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800";

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.ts') || file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    if (content.includes(targetAida)) {
        content = content.split(targetAida).join(materialsUrl);
        changed = true;
    }
    
    if (content.includes(targetPlaceholder)) {
        if (file.includes('cots.ts')) {
            content = content.split(targetPlaceholder).join(cotUrl);
        } else {
            content = content.split(targetPlaceholder).join(mattressUrl);
        }
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
});
