import os
import re

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if re.search(r'\brounded-(md|sm)\b|\brounded\b', line):
                    print(f"{file_path} Line {i+1}: {line.strip()}")
