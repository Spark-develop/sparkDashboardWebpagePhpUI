import re
text="paresh chauhan"
match1 = re.sub("paresh","amit",text)
print(match1)
match2 = re.sub(r'\s+',"-",text)
print(match2)
match3 = re.sub(r'\S+',"-space-",text)
print(match3)
