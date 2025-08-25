import markdown
import sys

def convert_md_to_html(md_file, html_file):
    with open(md_file, 'r') as f:
        text = f.read()
    html = markdown.markdown(text)
    with open(html_file, 'w') as f:
        f.write(html)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python converter.py input.md output.html")
    else:
        convert_md_to_html(sys.argv[1], sys.argv[2])
