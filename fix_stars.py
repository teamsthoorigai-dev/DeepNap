import os

file_path = 'src/components/CotConfigurator.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# The span for star without FILL is currently:
# <span className="material-symbols-outlined text-[16px]">star</span>
# <span className="material-symbols-outlined text-[16px]">star_half</span>

content = content.replace('<span className="material-symbols-outlined text-[16px]">star</span>', '<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "\'FILL\' 1" }}>star</span>')
content = content.replace('<span className="material-symbols-outlined text-[16px]">star_half</span>', '<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "\'FILL\' 1" }}>star_half</span>')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated stars in CotConfigurator.tsx")
