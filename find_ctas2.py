import os
import re

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            for i, line in enumerate(lines):
                # Search for rounded-lg, rounded-md, rounded-sm, rounded, rounded-xl
                # that might be on a CTA
                if re.search(r'\brounded-(lg|md|sm)\b', line) or re.search(r'\brounded\b', line):
                    # check if surrounding context has <button, <a, <Link
                    context = "".join(lines[max(0, i-2):min(len(lines), i+3)])
                    if '<button' in context or '<a ' in context or '<Link' in context:
                        print(f"--- {file_path} Line {i+1} ---")
                        print(context.strip())
