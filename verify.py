import os
import re

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find all tag blocks for button, a, Link
            matches = re.finditer(r'<(button|a|Link)\b([^>]*)>', content, re.IGNORECASE | re.DOTALL)
            for match in matches:
                tag = match.group(0)
                if 'rounded' in tag and 'rounded-full' not in tag and 'rounded-none' not in tag:
                    print(f"FOUND NON-FULL IN {file_path}:")
                    print(tag)
