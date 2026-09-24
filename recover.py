import json
import os

convos = [
    '80a442df-1bb9-4072-9ef9-e46d3724b3f4',
    '0001dd52-2708-4e06-9f5e-19da22e1d449',
    '0f0e96fb-8968-49ed-b4db-39a3db3eeea0'
]

actions = []

for c in convos:
    path = f'C:/Users/Admin/.gemini/antigravity/brain/{c}/.system_generated/logs/transcript.jsonl'
    try:
        with open(path, 'r', encoding='utf-8') as f:
            for line in f:
                data = json.loads(line)
                time = data.get('created_at', '')
                if time < '2026-09-24T16:56:09Z':
                    continue
                if data.get('type') == 'PLANNER_RESPONSE' and 'tool_calls' in data:
                    for t in data['tool_calls']:
                        if t['name'] == 'replace_file_content':
                            args = t.get('args', {})
                            target_file = args.get('TargetFile', '').strip('"').replace('\\\\', '\\')
                            
                            target_content = args.get('TargetContent', '')
                            if isinstance(target_content, str) and target_content.startswith('"') and target_content.endswith('"'):
                                # parse json string for newlines
                                try:
                                    target_content = json.loads(target_content)
                                except:
                                    pass
                            
                            replacement = args.get('ReplacementContent', '')
                            if isinstance(replacement, str) and replacement.startswith('"') and replacement.endswith('"'):
                                try:
                                    replacement = json.loads(replacement)
                                except:
                                    pass

                            if target_file and target_content and replacement:
                                actions.append({
                                    'time': time,
                                    'file': target_file,
                                    'target': target_content,
                                    'replacement': replacement,
                                    'desc': args.get('Description', '').strip('"')
                                })
    except Exception as e:
        print(f'{c}: Error - {e}')

actions.sort(key=lambda x: x['time'])

for act in actions:
    file_path = act['file']
    print(f"Applying [{act['time']}] to {os.path.basename(file_path)}: {act['desc']}")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if act['target'] in content:
            new_content = content.replace(act['target'], act['replacement'])
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print("  -> Success")
        else:
            print("  -> Failed: Target not found")
    except Exception as e:
        print(f"  -> Error reading/writing: {e}")

