import re

file_path = "src/app/mattresses/page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace whatever garbage is before the price with the actual Rupee symbol
# The line is something like:
# <div className="font-price-display text-price-display text-primary">GARBAGE{product.priceFrom.toLocaleString('en-IN')}</div>

content = re.sub(
    r'<div className="font-price-display text-price-display text-primary">.*?\{product\.priceFrom',
    r'<div className="font-price-display text-price-display text-primary">₹{product.priceFrom',
    content
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed currency symbol")
