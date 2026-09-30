const fs = require('fs');
function fixPrice(file) {
    let code = fs.readFileSync(file, 'utf-8');
    // Fix corruption
    code = code.replace(/\?\{price/g, '₹{price');
    code = code.replace(/â‚¹\{price/g, '₹{price');
    // For custom-size/page.tsx, also fix the class
    if (file.includes('custom-size')) {
        code = code.replace(/font-display-md text-display-md text-primary/g, 'font-price-display text-price-display text-primary font-semibold');
    }
    fs.writeFileSync(file, code, 'utf-8');
}
fixPrice('src/app/custom-size/page.tsx');
fixPrice('src/components/homepage/CustomSizeBuilder.tsx');
console.log('Fixed prices and classes');
