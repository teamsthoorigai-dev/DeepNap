import json
import glob
from collections import defaultdict

convos = [
    '80a442df-1bb9-4072-9ef9-e46d3724b3f4',
    '0001dd52-2708-4e06-9f5e-19da22e1d449',
    '0f0e96fb-8968-49ed-b4db-39a3db3eeea0'
]

file_mods = defaultdict(list)

for c in convos:
    path = f'C:/Users/Admin/.gemini/antigravity/brain/{c}/.system_generated/logs/transcript.jsonl'
    try:
        with open(path, 'r', encoding='utf-8') as f:
            for line in f:
                data = json.loads(line)
                if data.get('type') == 'PLANNER_RESPONSE' and 'tool_calls' in data:
                    for t in data['tool_calls']:
                        if t['name'] in ['replace_file_content']:
                            target = t.get('args', {}).get('TargetFile', '').split('\\')[-1]
                            desc = t.get('args', {}).get('Description', '')
                            time = data.get('created_at', '')
                            file_mods[target].append(f"[{time}] {c[:8]}: {desc}")
    except Exception as e:
        print(f'{c}: Error - {e}')

for f, mods in file_mods.items():
    print(f"\n{f}:")
    for m in mods:
        print(f"  {m}")
