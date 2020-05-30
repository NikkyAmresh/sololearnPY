#Working for almost all contries over the world
#https://www.zomato.com/cities
import urllib.request as req
exec("li="+str(req.urlopen("https://zomato-cities.herokuapp.com/getcities").read()))
exec(li)
print("\nHurray! Zomato is availible in your city." if input("Enter your city name : ").upper().strip() in [x.upper() for x in cities] else "\nSorry, Zomato is not available in your city.")