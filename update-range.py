import re

file_path = "src/components/homepage/ProductRange.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Change SecondaryButton to custom Link button for all three cards
# We need to replace:
# <SecondaryButton href="/mattresses?type=Latex" className="!h-9 !px-4 !text-sm">Enquire</SecondaryButton>
# with the new button.
content = re.sub(
    r'<SecondaryButton href="([^"]+)" className="!h-9 !px-4 !text-sm">Enquire</SecondaryButton>',
    r'<Link href="\1" className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-primary-container text-surface-white font-label-nav text-label-nav text-sm font-semibold border-[1.5px] border-primary-container hover:bg-transparent hover:text-primary-container transition-all">Enquire</Link>',
    content
)

# 2. Fix the broken bullet point between Firmness and Warranty
content = re.sub(r'<span>A.*?</span>', r'<span>•</span>', content)

# 3. Pull the bottom row up by reducing padding in the text block above it
# Find: <div className="p-6 space-y-3">
content = content.replace(
    '<div className="p-6 space-y-3">',
    '<div className="px-6 pt-6 pb-4 space-y-3">'
)

# 4. Cut the excess box by reducing the bottom padding of the card
# Find: <div className="px-6 pb-6 pt-0 flex items-center justify-between">
content = content.replace(
    '<div className="px-6 pb-6 pt-0 flex items-center justify-between">',
    '<div className="px-6 pb-4 pt-0 flex items-center justify-between">'
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated buttons, spacing, and bullet points.")
