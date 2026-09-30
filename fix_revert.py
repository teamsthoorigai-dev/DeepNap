import os
file_path = 'src/app/compare/CompareTable.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'className="absolute inset-6 rounded-full border-2 border-dashed',
    'className="absolute inset-6 rounded-lg border-2 border-dashed'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Reverted CompareTable placeholder card.")
