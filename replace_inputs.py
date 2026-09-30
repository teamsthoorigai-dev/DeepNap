import re

LENGTH_OPTIONS = [72, 75, 78]
WIDTH_OPTIONS = [36, 48, 60, 72, 78, 84]
THICKNESS_OPTIONS = [3, 4, 5, 6]

def get_select_html(val_name, options_arr):
    options_html = '\n'.join([f'                    <option key={{{val}}} value={{{val}}}>{val}</option>' for val in options_arr])
    setter_name = 'set' + val_name.capitalize()
    return f'''<select
                  className="w-full h-[52px] bg-surface-white rounded-lg border border-hairline px-3.5 pr-10 appearance-none font-label-nav text-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-semibold"
                  value={{{val_name}}}
                  onChange={{(e) => {setter_name}(Number(e.target.value) || 0)}}
                >
{options_html}
                </select>'''

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace inputs using [\s\S]*? to handle newlines and > in arrow functions
    content = re.sub(r'<input[\s\S]*?value=\{length\}[\s\S]*?/>', get_select_html('length', LENGTH_OPTIONS), content)
    content = re.sub(r'<input[\s\S]*?value=\{width\}[\s\S]*?/>', get_select_html('width', WIDTH_OPTIONS), content)
    content = re.sub(r'<input[\s\S]*?value=\{thickness\}[\s\S]*?/>', get_select_html('thickness', THICKNESS_OPTIONS), content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated", file_path)

process_file('src/components/homepage/CustomSizeBuilder.tsx')
process_file('src/app/custom-size/page.tsx')
