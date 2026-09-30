import re

file_path = "src/components/homepage/SupportCards.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Break the subtitle
content = content.replace(
    'Answer four questions about how you sleep, we shortlist from 13 types.',
    'Answer four questions about how you sleep, we shortlist <br className="hidden md:block" /> from 13 types.'
)

# 2. Fix the CTA button alignment
content = content.replace(
    '<PrimaryButton href="/quiz" className="shrink-0 mt-1">',
    '<PrimaryButton href="/quiz" className="shrink-0">'
)

# 3. Card 1 text
content = content.replace(
    'Side sleepers, pressure relief on shoulders and hips',
    'Side sleepers, pressure relief on <br /> shoulders and hips'
)

# 4. Card 2 text
content = content.replace(
    'Back & combination sleepers, balanced spinal posture',
    'Back & combination sleepers, balanced <br /> spinal posture'
)

# 5. Card 3 text
content = content.replace(
    'Stomach sleepers, firm orthopaedic spine support',
    'Stomach sleepers, firm orthopaedic <br /> spine support'
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updates applied to SupportCards.tsx")
