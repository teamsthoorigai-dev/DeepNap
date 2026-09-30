import os
import re

print("Starting scan...")
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find all button and Link tags and a tags
            # We can do this by splitting the content by '<'
            tags = re.findall(r'<(button|Link|a)[\s\S]*?>', content)
            
            for tag in tags:
                # regex to capture the whole tag
                pass

            # Alternative: find all classNames in elements that look like buttons
            matches = re.finditer(r'<(button|Link|a)\b([^>]*)>', content, re.IGNORECASE | re.DOTALL)
            for match in matches:
                tag_name = match.group(1)
                attrs = match.group(2)
                
                # if it's an <a> or <Link> it must look like a button to be a CTA
                # Usually they have bg- or button or something
                class_match = re.search(r'className=["\']([^"\']+)["\']', attrs)
                if class_match:
                    classes = class_match.group(1)
                    
                    if tag_name.lower() in ['a', 'link']:
                        # only consider it if it has 'bg-', 'btn', 'button', 'px-', 'py-', 'rounded'
                        if not re.search(r'\bbg-|\bpx-|\brounded', classes):
                            continue
                            
                    # Does it have rounded?
                    if 'rounded' in classes:
                        if 'rounded-full' not in classes:
                            print(f"{file_path}: <{tag_name} className='{classes}'>")
