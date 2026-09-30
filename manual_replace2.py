import os
replacements = [
    # Custom Size Toggle
    ('src/components/ProductConfigurator.tsx',
     'font-medium rounded-lg hover:bg-surface-container flex items-center',
     'font-medium rounded-full hover:bg-surface-container flex items-center'),
    # Thickness buttons
    ('src/components/ProductConfigurator.tsx',
     'font-medium rounded-lg transition-colors',
     'font-medium rounded-full transition-colors'),
    # Custom Size Toggle in Cot
    ('src/components/CotConfigurator.tsx',
     'font-medium rounded-lg hover:bg-surface-container flex items-center',
     'font-medium rounded-full hover:bg-surface-container flex items-center'),
]
for file_path, old_str, new_str in replacements:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        if old_str in content:
            new_content = content.replace(old_str, new_str)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Replaced in {file_path}")
        else:
            print(f"NOT FOUND in {file_path}: {old_str}")
