import os
import re

files_to_check = [
    'src/app/b2b/page.tsx',
]

def replace_rounded(match):
    tag = match.group(0)
    if 'rounded-lg' in tag:
        return tag.replace('rounded-lg', 'rounded-full')
    return tag

for file_path in files_to_check:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = re.sub(r'<(button|a|Link)\b[^>]*>', replace_rounded, content, flags=re.IGNORECASE)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file_path}")
print("Finished updates.")
