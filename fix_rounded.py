import os
import re

files_to_check = [
    'src/app/b2b/page.tsx',
    'src/app/compare/CompareTable.tsx',
    'src/app/custom-size/page.tsx',
    'src/app/faq/page.tsx',
    'src/app/mattresses/page.tsx',
    'src/app/mattresses/[slug]/page.tsx',
    'src/app/quiz/page.tsx',
    'src/app/warranty/page.tsx',
    'src/components/CotConfigurator.tsx',
    'src/components/ProductConfigurator.tsx'
]

def replace_rounded(match):
    tag = match.group(0)
    # only replace if it has rounded-lg
    if 'rounded-lg' in tag:
        return tag.replace('rounded-lg', 'rounded-full')
    return tag

for file_path in files_to_check:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Regex to match <button, <a, <Link elements and their attributes up to the closing >
        # This will safely target only the opening tags of these elements.
        new_content = re.sub(r'<(button|a\s|Link)\b[^>]*>', replace_rounded, content)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file_path}")
print("Finished updates.")
