import re

file_path = 'src/app/visit/page.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Make the card flex col
old_card_class = '<div className="bg-surface-white p-8 rounded-2xl border border-hairline shadow-sm">'
new_card_class = '<div className="bg-surface-white p-8 rounded-2xl border border-hairline shadow-sm flex flex-col">'
content = content.replace(old_card_class, new_card_class, 1)

# Make the ul flex col and space between
old_ul_class = '<ul className="space-y-4">'
new_ul_class = '<ul className="flex-1 flex flex-col justify-between min-h-[250px]">'
content = content.replace(old_ul_class, new_ul_class)

# Add line breaks
br = '<br className="hidden md:block" />'

content = content.replace(
    'in person before you buy.',
    f'in person {br}before you buy.'
)
content = content.replace(
    'tape-edged on the factory floor.',
    f'tape-edged on {br}the factory floor.'
)
content = content.replace(
    'antique or carpenter-built beds.',
    f'antique or {br}carpenter-built beds.'
)
content = content.replace(
    'immediately, the same day you visit.',
    f'immediately, the same {br}day you visit.'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated visit page successfully")
