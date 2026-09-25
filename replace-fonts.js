const fs = require('fs');
const path = require('path');

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

const files = walk('src');
let changed = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.match(/\bfont-(bold|extrabold|black)\b/)) {
    content = content.replace(/\bfont-bold\b/g, 'font-semibold');
    content = content.replace(/\bfont-extrabold\b/g, 'font-semibold');
    content = content.replace(/\bfont-black\b/g, 'font-semibold');
    fs.writeFileSync(file, content, 'utf8');
    changed++;
  }
});

console.log('Replaced fonts in ' + changed + ' files.');
