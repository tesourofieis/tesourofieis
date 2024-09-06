import re

def parse_and_modify_observances(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    # Regular expression to match each object in the OBSERVANCES
    object_pattern = re.compile(r'(\w+):\s*{[^}]+}', re.DOTALL)
    
    def modify_object(match):
        obj = match.group(0)
        
        # Check if getSunday is true or weekday is 0
        if 'getSunday: true' in obj or 'weekday: 0' in obj:
            # Change the link to end with 0
            obj = re.sub(r'(link:\s*"[^"]+)\d+(")', r'\g<1>0\2', obj)
        
        # Remove getSunday property
        obj = re.sub(r',?\s*getSunday:\s*true', '', obj)
        
        return obj

    # Apply modifications
    modified_content = object_pattern.sub(modify_object, content)

    return modified_content

# Usage
file_path = 'observances.ts'  # Replace with the actual path to your observances.ts file
modified_observances = parse_and_modify_observances(file_path)

# Print the modified content
print(modified_observances)

# Optionally, write the modified content to a new file
with open('modified_observances.ts', 'w') as file:
    file.write(modified_observances)
