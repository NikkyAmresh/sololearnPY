#my first python code... 
import random
v=["PY","01","2K","NA","  "]
r=random.randint(0,4)
q=["PY","01","2K","NA"]
w=random.randint(0,3)
for i in range(21*20):
     x=i
     if(x%21==0):
          print(" ")
     if(x>=108 and x<=113 or x>=126 and x<=189 and x%21==8 or x>=192 and x<=197 or x>=210 and x<=273 and x%21==3 or x>=276 and x<=281 or x>=105 and x<=294 and x%21==12 or x>=168 and x<=294 and x%22==4 or x>=105 and x<=189 and x%20==2):
          if(r==4):
             print(q[w],end="")
          else:      
             print("  ",end="")
     else:
          print(v[r], end="")  
print("")
print("")
print("             Thanks for 2K :)")
print("")
print("Run again to see different")