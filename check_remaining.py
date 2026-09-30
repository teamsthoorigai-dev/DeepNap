import os
import re

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Use regex to find ANY class containing rounded-lg, check if it's within a button or a or Link
            # actually just print out the classNames that have rounded-lg
            matches = re.finditer(r'className=["\']([^"\']*rounded-lg[^"\']*)["\']', content)
            for m in matches:
                # print a snippet around it
                classes = m.group(1)
                idx = m.start()
                snippet = content[max(0, idx-20):min(len(content), idx+50)].replace('\n', ' ')
                if '<button' in snippet or '<a ' in snippet or '<Link' in snippet:
                    print(f"{file_path}: ... {snippet} ...")
