import re

def get_first_price(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        # Find the first non-empty cell after the row 3 mattress name
        # We can just look for the first number > 1000
        matches = re.findall(r'>\s*(\d{3,5})\s*<', content)
        if matches:
            return matches[0]
    return "None"

print("3.html:", get_first_price('docs/sheets_1/3.html'))
print("4.html:", get_first_price('docs/sheets_1/4.html'))
print("5.html:", get_first_price('docs/sheets_1/5.html'))
print("6.html:", get_first_price('docs/sheets_1/6.html'))
