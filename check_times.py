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
            last_time = None
            for line in f:
                data = json.loads(line)
                if 'created_at' in data:
                    last_time = data['created_at']
            print(f'{c}: Last event at {last_time}')
    except Exception as e:
        print(f'{c}: Error - {e}')
