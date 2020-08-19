import re

with open('student_det.txt','r') as stud_cont:
    stud = stud_cont.read()
stud_birth=re.findall(r'(\d{2})[-](\d{2})[-](\d{4})+',stud)
stud_name=re.findall(r'\b\D+',stud)

print(stud_birth,stud_name)

