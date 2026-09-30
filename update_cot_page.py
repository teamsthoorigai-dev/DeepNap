import os

# 1. Update opacity
page_path = 'src/app/diwan-cots/[slug]/page.tsx'
with open(page_path, 'r', encoding='utf-8') as f:
    page_content = f.read()
page_content = page_content.replace('bg-[#EFE5D7] ', 'bg-[#EFE5D7]/50 ')
with open(page_path, 'w', encoding='utf-8') as f:
    f.write(page_content)

# 2. Update description
data_path = 'src/data/cots.ts'
with open(data_path, 'r', encoding='utf-8') as f:
    data_content = f.read()
data_content = data_content.replace(
    'Our signature teak frame with smooth hydraulic lift storage built in.',
    'Our signature teak frame with smooth hydraulic lift\\nstorage built in.'
)
with open(data_path, 'w', encoding='utf-8') as f:
    f.write(data_content)

# 3. Update whitespace
config_path = 'src/components/CotConfigurator.tsx'
with open(config_path, 'r', encoding='utf-8') as f:
    config_content = f.read()
config_content = config_content.replace(
    '<p className="font-body-regular text-body-regular text-slate">{cot.description}</p>',
    '<p className="font-body-regular text-body-regular text-slate whitespace-pre-wrap">{cot.description}</p>'
)
with open(config_path, 'w', encoding='utf-8') as f:
    f.write(config_content)
print("Done")
