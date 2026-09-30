import os

replacements = [
    # B2B
    ('src/app/b2b/page.tsx', 
     'px-8 rounded-lg border-2', 
     'px-8 rounded-full border-2'),
    # Compare
    ('src/app/compare/CompareTable.tsx',
     'py-2.5 rounded-lg border border-primary',
     'py-2.5 rounded-full border border-primary'),
    # Custom Size
    ('src/app/custom-size/page.tsx',
     'text-surface-white rounded-lg font-label-nav',
     'text-surface-white rounded-full font-label-nav'),
    # FAQ
    ('src/app/faq/page.tsx',
     'px-6 rounded-lg bg-[#25D366]',
     'px-6 rounded-full bg-[#25D366]'),
    ('src/app/faq/page.tsx',
     'px-6 rounded-lg bg-surface-white border',
     'px-6 rounded-full bg-surface-white border'),
    ('src/app/faq/page.tsx',
     'px-6 rounded-lg bg-primary text-surface-white',
     'px-6 rounded-full bg-primary text-surface-white'),
    # Mattresses
    ('src/app/mattresses/page.tsx',
     'px-6 rounded-lg border border-primary',
     'px-6 rounded-full border border-primary'),
    ('src/app/mattresses/page.tsx',
     'text-surface-white rounded-lg font-label-nav',
     'text-surface-white rounded-full font-label-nav'),
    # Mattress slug
    ('src/app/mattresses/[slug]/page.tsx',
     'semibold rounded-lg hover:bg-navy-deep',
     'semibold rounded-full hover:bg-navy-deep'),
    # Quiz
    ('src/app/quiz/page.tsx',
     'semibold rounded-lg disabled:opacity-50',
     'semibold rounded-full disabled:opacity-50'),
    ('src/app/quiz/page.tsx',
     'semibold rounded-lg hover:bg-navy-deep',
     'semibold rounded-full hover:bg-navy-deep'),
    ('src/app/quiz/page.tsx',
     'semibold rounded-lg hover:bg-primary/5',
     'semibold rounded-full hover:bg-primary/5'),
    # Warranty
    ('src/app/warranty/page.tsx',
     'px-6 rounded-lg bg-[#25D366]',
     'px-6 rounded-full bg-[#25D366]'),
    # Cot Configurator
    ('src/components/CotConfigurator.tsx',
     'font-medium rounded-lg hover:bg-surface-container',
     'font-medium rounded-full hover:bg-surface-container'),
    ('src/components/CotConfigurator.tsx',
     'leading-10 rounded-lg bg-surface-white',
     'leading-10 rounded-full bg-surface-white'),
    ('src/components/CotConfigurator.tsx',
     'semibold flex items-center justify-center hover:bg-navy-deep transition-colors shadow-sm',
     'semibold flex items-center justify-center hover:bg-navy-deep transition-colors shadow-sm'), # wait this line might not have rounded-lg in this exact substring
    # let's be more precise
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
