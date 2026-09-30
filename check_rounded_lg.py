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

for file_path in files_to_check:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if 'rounded-lg' in line:
                print(f"{file_path} Line {i+1}: {line.strip()}")
