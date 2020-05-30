import io
from glob import glob

def addjscss(file):
	with io.open(file,'r',encoding='utf-8') as f:
		filedata=f.read()
	filedata = filedata.replace('</head>','<link rel="stylesheet" type="text/css" href="style.css">\n\t</head>')
	filedata = filedata.replace('</body>','<script type="text/javascript" src="script.js"></script>\n\t</body>')
	with io.open(file,'w',encoding='utf-8') as f:
		f.write(filedata)

for file in glob("*/*.html"):
	addjscss(file)
# f = open('index.html',"a")
# for fol in glob("*"):
# 	f.write("\n\t<li><a href='web/"+fol+"'>"+fol+"</a></li>")
# f.close()