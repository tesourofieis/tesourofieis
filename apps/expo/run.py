import os
import re
from pathlib import Path

EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"]
EXCLUDE_DIRS = ["node_modules", ".git", "dist", "build", ".expo"]


def get_all_files(directory: str) -> list[str]:
    files = []
    for root, dirs, filenames in os.walk(directory):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for filename in filenames:
            if any(filename.endswith(ext) for ext in EXTENSIONS):
                files.append(os.path.join(root, filename))
    return files


def replace_text_with_p(file_path: str) -> bool:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    if "react-native" not in content:
        return False
    if 'from "~/components/typography"' in content:
        return False

    modified = content
    has_changes = False

    import_match = re.search(
        r'import\s+{([^}]+)}\s+from\s+["\']react-native["\']', content
    )
    if import_match:
        imports = [i.strip() for i in import_match.group(1).split(",")]
        if "Text" in imports:
            other_imports = [i for i in imports if i != "Text"]

            if other_imports:
                modified = re.sub(
                    r'import\s+{[^}]+}\s+from\s+["\']react-native["\']',
                    f'import {{ {", ".join(other_imports)} }} from "react-native"',
                    modified,
                )
            else:
                modified = re.sub(
                    r'import\s+{[^}]+}\s+from\s+["\']react-native["\'];?\n?',
                    "",
                    modified,
                )

            modified = 'import { P } from "~/components/typography";\n' + modified

            modified = re.sub(r"<Text\b", "<P", modified)
            modified = re.sub(r"</Text>", "</P>", modified)

            has_changes = True

    if has_changes:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(modified)
        print(f"✓ {file_path}")

    return has_changes


def main():
    import sys

    target_dir = sys.argv[1] if len(sys.argv) > 1 else "./app"
    files = get_all_files(target_dir)

    print(f"Found {len(files)} files to process...\n")

    modified_count = sum(replace_text_with_p(file) for file in files)

    print(f"\nModified {modified_count} files")


if __name__ == "__main__":
    main()
