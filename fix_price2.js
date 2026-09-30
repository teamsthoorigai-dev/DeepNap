const fs = require('fs');
let code = fs.readFileSync('src/app/custom-size/page.tsx', 'utf-8');
code = code.replace(/\?\{price/g, '₹{price');
code = code.replace(/,1\{price/g, '₹{price');
fs.writeFileSync('src/app/custom-size/page.tsx', code, 'utf-8');
console.log('Fixed price symbol again');
