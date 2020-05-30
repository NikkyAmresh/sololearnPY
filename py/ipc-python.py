import requests,json
head={
    "Authorization":'6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5' 
    }
 
url='http://api-testapp-ipc.herokuapp.com/api/v1/chapter'
print(requests.get(url,headers = head).json()) 