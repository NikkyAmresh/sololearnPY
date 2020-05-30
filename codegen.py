# from failed import links
from requests import get as op
import io,os,random
from bs4 import BeautifulSoup as bs
# os.mkdir("web")
# os.mkdir("py")
# os.mkdir("nikky")
# os.mkdir("java")
# os.mkdir("swift")
# os.mkdir("c")
# os.mkdir("cpp")
# os.mkdir("cs")
# os.mkdir("js")
# os.mkdir("php")
# os.mkdir("rb")
# os.mkdir("kt")
# os.mkdir("other")
ln = op('https://www.sololearn.com/Profile/3268934')
soup = bs(ln.text,"html.parser")
allcodes = soup.select_one("#userCodes")
links = allcodes.select("a.icon")

# donelink = [link['href'] for link in alllinks]
failed = []
for i,lk in enumerate(list(set(links))):
	# if lk not in donelink:
	try:
		res = op(lk)
		soup = bs(res.text,"html.parser")
		title = soup.select_one('title').text.split("|")[0].strip().replace("/"," ")
		lang = soup.select_one("#Language")['value']
		code = soup.select_one("#Code")['value']
		css = soup.select_one("#CssCode")['value']
		js = soup.select_one("#JsCode")['value']
		langs = ["web","c","cpp","cs","js","java","kt","nikky","other","php","py","rb","swift","web"]
		path = lang+"/"+title
		while os.path.exists(path):
			path+=str(random.randint(100,999))
		if os.path.exists(lang) and lang=="web":
			os.mkdir(path)
		elif not os.path.exists(lang):
			path = lang
			os.makedirs(path)
		if(lang=="web"):
			with io.open(path+'/index.html','w',encoding='utf-8') as f:
				f.write(code)
			with io.open(path+'/style.css','w',encoding='utf-8') as f:
				f.write(css)
			with io.open(path+'/script.js','w',encoding='utf-8') as f:
				f.write(js)
		else:
			while os.path.exists(lang+'/'+title+"."+lang):
				title+=str(random.randint(100,999))
			with io.open(lang+'/'+title+"."+lang,'w',encoding='utf-8') as f:
				f.write(code)
		print(i,title,"done : ",len(list(set(links)))-i,"left")
	except Exception as e:
		print(lk ,"failed",e)
		failed.append(lk)
print(failed)