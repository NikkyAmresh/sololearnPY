# Created by Kadam Dharmeshbhai Darji

from time import time 
def time_random(): 
   return time() - float(str(time()).split('.')[0]) 
def gen_random_range(min, max): 
   a= int(time_random() * (max - min) + min) 
   print(a)
#a1=input("")
#a2=input("\nChosen Number: ")
if __name__ == '__main__': 
        gen_random_range(int(10),int(20))
        gen_random_range(int(10),int(20))
        gen_random_range(int(10),int(20))
      
'''
Input must be:
10(or anything)
and new line
20
'''

      

