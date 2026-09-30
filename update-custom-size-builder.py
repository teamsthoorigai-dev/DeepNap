import re

file_path = "src/components/homepage/CustomSizeBuilder.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix the broken currency symbol
# It appears as ",1" in powershell, but let's just use regex to replace whatever is before {price
content = re.sub(
    r'<div className="font-price-display text-price-display text-primary">\s*[^\{]*\{price',
    r'<div className="font-price-display text-price-display text-primary">\n                ₹{price',
    content
)

# 1. Reduce the width of the whole card container
content = content.replace('className="max-w-[1080px] mx-auto flex flex-col space-y-6"', 'className="max-w-2xl mx-auto flex flex-col space-y-3"')

# 2. Reduce the gap inside the card
content = content.replace('className="flex flex-col gap-8"', 'className="flex flex-col gap-4"')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated CustomSizeBuilder layout and fixed currency symbol")
