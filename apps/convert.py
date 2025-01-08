import os
import re
from pathlib import Path

def parse_frontmatter(fm_content):
    """Parse YAML-like frontmatter without using yaml package."""
    frontmatter = {}
    lines = fm_content.strip().split('\n')
    
    for line in lines:
        if not line.strip():
            continue
            
        parts = line.split(':', 1)
        if len(parts) == 2:
            key = parts[0].strip()
            value = parts[1].strip()
            
            if value.startswith('"') and value.endswith('"'):
                value = value[1:-1]
            elif value.startswith("'") and value.endswith("'"):
                value = value[1:-1]
                
            frontmatter[key] = value
    
    return frontmatter

def extract_frontmatter(content):
    """Extract frontmatter from content."""
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            frontmatter = parse_frontmatter(parts[1])
            return frontmatter, parts[2]
    return {}, content

def process_imports(line):
    """Process import statements to remove file extensions."""
    if not line.startswith('import '):
        return line
        
    # Handle different import patterns
    if 'from' in line:
        # For imports with 'from'
        import_part, from_part = line.rsplit('from', 1)
        path = from_part.strip().strip('"').strip("'")
        # Remove extension if present
        if path.endswith('.mdx') or path.endswith('.tsx') or path.endswith('.jsx'):
            path = os.path.splitext(path)[0]
        return f"{import_part}from '{path}'"
    else:
        # For direct imports
        path = line.replace('import', '').strip().strip('"').strip("'")
        if path.endswith('.mdx') or path.endswith('.tsx') or path.endswith('.jsx'):
            path = os.path.splitext(path)[0]
        return f"import '{path}'"

def convert_markdown_headings(content):
    """Convert markdown headings to HTML tags."""
    def replace_heading(match):
        level = len(match.group(1))  # Count the number of #
        text = match.group(2).strip()
        indent = '      '  # Basic indentation
        return f"{indent}<h{level}>{text}</h{level}>"

    # Replace headings (supports # through ######)
    pattern = r'^(#{1,6})\s+(.+)$'
    lines = content.split('\n')
    processed_lines = []
    
    for line in lines:
        if re.match(pattern, line):
            processed_lines.append(re.sub(pattern, replace_heading, line))
        else:
            processed_lines.append(line)
            
    return '\n'.join(processed_lines)

def process_div_content(div_content, indent=6):
    """Process content inside any div and preserve paragraph breaks."""
    # Split content by empty lines and wrap each part in a paragraph
    paragraphs = [p.strip() for p in div_content.strip().split('\n\n') if p.strip()]
    indentation = ' ' * indent
    formatted_paragraphs = '\n'.join(f'{indentation}<p>{p}</p>' for p in paragraphs)
    return formatted_paragraphs

def process_divs(content):
    """Process all divs and handle paragraph breaks."""
    def replace_div(match):
        full_div = match.group(0)
        div_start = match.group(1)  # includes the opening div tag
        div_content = match.group(2)
        div_end = match.group(3)    # includes the closing div tag
        
        # Process the content inside the div
        processed_content = process_div_content(div_content)
        
        # Reconstruct the div with processed content
        return f"{div_start}\n{processed_content}\n      {div_end}"

    # Pattern to match any div with its content
    pattern = r'(<div[^>]*>)\s*([\s\S]*?)\s*(</div>)'
    return re.sub(pattern, replace_div, content)

def convert_mdx_to_tsx(file_path, input_root, output_root):
    """Convert an MDX file to TSX."""
    try:
        # Read the MDX file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract frontmatter and content
        frontmatter, content = extract_frontmatter(content)

        # Extract imports
        imports = []
        other_lines = []
        
        for line in content.split('\n'):
            if line.startswith('import '):
                imports.append(process_imports(line))
            else:
                other_lines.append(line)

        content = '\n'.join(other_lines)

        # Convert markdown headings
        content = convert_markdown_headings(content)

        # Process all divs
        content = process_divs(content)

        # Convert class to className
        content = content.replace('class="', 'className="')

        # Create component name from filename
        component_name = Path(file_path).stem.replace('-', '_').title().replace('_', '')

        # Create TSX content
        tsx_content = f"""'use dom'

import React from 'react';
{chr(10).join(imports)}

export default function {component_name}() {{
  return (
    <>
      <h1>{frontmatter.get('title', '')}</h1>
{content}
    </>
  );
}}
"""

        # Preserve directory structure
        rel_path = os.path.relpath(file_path, input_root)
        rel_dir = os.path.dirname(rel_path)
        output_dir = os.path.join(output_root, rel_dir)
        
        # Create necessary directories
        os.makedirs(output_dir, exist_ok=True)

        # Create the output file path
        output_file = os.path.join(output_dir, Path(file_path).stem + '.tsx')
        
        # Write the new TSX file
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(tsx_content)

        print(f"Converted {file_path} to {output_file}")

    except Exception as e:
        print(f"Error processing {file_path}: {str(e)}")

def process_directory(input_dir):
    """Process all MDX files in a directory and its subdirectories."""
    input_dir = os.path.abspath(input_dir)
    parent_dir = os.path.dirname(input_dir)
    input_basename = os.path.basename(input_dir)
    output_root = os.path.join(parent_dir, 'converted_tsx', input_basename)
    
    # Create the root output directory
    os.makedirs(output_root, exist_ok=True)
    
    for root, dirs, files in os.walk(input_dir):
        for file in files:
            if file.endswith('.mdx'):
                mdx_path = os.path.join(root, file)
                convert_mdx_to_tsx(mdx_path, input_dir, output_root)
    
    return output_root

if __name__ == "__main__":
    import sys
    directory = sys.argv[1] if len(sys.argv) > 1 else "."
    print(f"Processing directory: {directory}")
    output_dir = process_directory(directory)
    print(f"Conversion complete! Converted files are in: {output_dir}")
