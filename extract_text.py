import xml.etree.ElementTree as ET
import os

xml_path = r'd:\Antigravity\Samarth Goel Profile\samarth_unpacked\word\document.xml'
output_path = r'd:\Antigravity\Samarth Goel Profile\profile_text.txt'

def extract_text(xml_file):
    tree = ET.parse(xml_file)
    root = tree.getroot()
    
    # Namespaces
    ns = {
        'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
    }
    
    text_content = []
    for paragraph in root.findall('.//w:p', ns):
        paragraph_text = []
        for text in paragraph.findall('.//w:t', ns):
            if text.text:
                paragraph_text.append(text.text)
        if paragraph_text:
            text_content.append(" ".join(paragraph_text))
            
    return "\n".join(text_content)

if os.path.exists(xml_path):
    content = extract_text(xml_path)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Extracted text to {output_path}")
else:
    print(f"File not found: {xml_path}")
