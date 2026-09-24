import json

convos = [
    '80a442df-1bb9-4072-9ef9-e46d3724b3f4',
    '0001dd52-2708-4e06-9f5e-19da22e1d449',
    '0f0e96fb-8968-49ed-b4db-39a3db3eeea0'
]

for c in convos:
    path = f'C:/Users/Admin/.gemini/antigravity/brain/{c}/.system_generated/logs/transcript.jsonl'
    try:
        with open(path, 'r', encoding='utf-8') as f:
            first_line = json.loads(f.readline())
            print(f'{c}: started at {first_line.get("created_at")}')
            
            tool_calls = []
            f.seek(0)
            for line in f:
                data = json.loads(line)
                if data.get('type') == 'PLANNER_RESPONSE' and 'tool_calls' in data:
                    for t in data['tool_calls']:
                        if t['name'] in ['replace_file_content', 'write_to_file', 'run_command']:
                            target = t.get('args', {}).get('TargetFile', '')
                            cmd = t.get('args', {}).get('CommandLine', '')
                            info = target if target else cmd
                            tool_calls.append(f"{t['name']}: {info}")
            for t in tool_calls:
                print("   ", t)
    except Exception as e:
        print(f'{c}: Error - {e}')
