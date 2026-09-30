import os
import re

def find_ctas():
    for root, dirs, files in os.walk('src'):
        for file in files:
            if file.endswith('.tsx'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # regex to find <button, <a, or <Link elements
                # this is tricky with regex, let's just find lines with "<button", "<a ", "<Link" and check if they have "rounded-" but not "rounded-full"
                
                lines = content.split('\n')
                for i, line in enumerate(lines):
                    # We might need to check if the tag spans multiple lines, but let's try a simple approach first
                    if re.search(r'<(button|a\s|Link)\b', line, re.IGNORECASE) or 'className=' in line:
                        pass
                
                # Actually, better regex: find tag blocks
                # <(button|a|Link)[^>]+>
                matches = re.finditer(r'<(button|a|Link)\b([^>]*)>', content, re.IGNORECASE)
                for match in matches:
                    tag = match.group(0)
                    if 'className=' in tag:
                        # Extract class name
                        class_match = re.search(r'className=["\']([^"\']+)["\']', tag)
                        if class_match:
                            classes = class_match.group(1)
                            # check if it has a rounded class that is not rounded-full
                            rounded_classes = [c for c in classes.split() if c.startswith('rounded-') or c == 'rounded']
                            non_full = [c for c in rounded_classes if c != 'rounded-full']
                            if non_full:
                                print(f"{file_path}: {tag}")
