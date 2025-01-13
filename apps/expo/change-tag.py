import os
import re
from typing import List

def find_jsx_files(start_path: str) -> List[str]:
    """Find all JSX/TSX/JS files recursively."""
    jsx_files = []
    for root, _, files in os.walk(start_path):
        for file in files:
            if file.endswith(('.jsx', '.tsx', '.js')):
                jsx_files.append(os.path.join(root, file))
    return jsx_files

def process_file(file_path: str) -> None:
    """Process a single file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    def process_view_content(match):
        """Process the content inside a side-by-side View."""
        full_view = match.group(0)
        
        # Pattern to find direct Text children of the View
        # This looks for Text tags that are properly formed and not nested inside other Text tags
        text_pattern = r'(<Text\s+className="[^"]*text-base[^"]*">(?:(?!<Text)[^<]|<(?!/Text))*?</Text>)'
        
        position = 0
        result = []
        counter = 0
        last_end = 0
        
        for text_match in re.finditer(text_pattern, full_view):
            text_tag = text_match.group(1)
            start, end = text_match.span(1)
            
            # Only process if this Text is a direct child (not inside another Text)
            if not re.search(r'<Text[^>]*>[^<]*' + re.escape(text_tag), full_view):
                counter += 1
                # Determine class to add (latin for odd, vernacular for even)
                new_class = 'latin' if counter % 2 == 1 else 'vernacular'
                # Replace or add the class
                new_text = re.sub(
                    r'className="([^"]*)"',
                    f'className="text-base {new_class}"',
                    text_tag
                )
                result.append(full_view[last_end:start])
                result.append(new_text)
                last_end = end
        
        result.append(full_view[last_end:])
        return ''.join(result)

    # Find Views with side-by-side class and process their content
    pattern = r'(<View\s+className="[^"]*side-by-side[^"]*">.*?</View>)'
    new_content = re.sub(pattern, process_view_content, content, flags=re.DOTALL)
    
    # Only write if changes were made
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Modified: {file_path}")

def main():
    base_path = os.path.abspath(os.path.join('src', 'app', '(tabs)'))
    
    if not os.path.exists(base_path):
        print(f"Error: Directory not found: {base_path}")
        return
    
    print(f"Starting processing from: {base_path}")
    
    for file_path in find_jsx_files(base_path):
        try:
            process_file(file_path)
        except Exception as e:
            print(f"Error processing {file_path}: {str(e)}")
    
    print("Processing completed!")

if __name__ == "__main__":
    main()
