const fs = require('fs');
let code = fs.readFileSync('src/app/custom-size/page.tsx', 'utf-8');
code = code.replace(/<span className="font-display-md text-display-md text-primary">[^<]*\{price/g, '<span className="font-display-md text-display-md text-primary">₹{price');
fs.writeFileSync('src/app/custom-size/page.tsx', code, 'utf-8');
console.log('Fixed price symbol robustly');
