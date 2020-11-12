from docxtpl import DocxTemplate
import jinja2
import pandas as pd


doc = DocxTemplate('CVPA_REPORT_template.docx')

note_data = pd.read_excel('FinalReportVar.xlsx')

context = dict(zip(note_data['var'], note_data['value']))
doc.render(context)
doc.save('FinalReport3.docx')

if __name__ == "__main__": 
    print("Executed when invoked directly")

