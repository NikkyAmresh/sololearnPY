#include <stdio.h>
int isInt(float);
int oddEven(int);
int res(float);
int main() {
     res(2);
     res(4);
     res(3);
     res(2.5);
     res(13);
}
int res(float nm){
    int n;
    if(isInt(nm)){
         if(oddEven(nm)){
             n=1;
         }else{
            n=2;
         }
     }else{
         n=3;
     }
    switch(n){
    case 1:
        printf("Even\n");
        break;
    case 2:
        printf("Odd\n");
        break;
    case 3:
        printf("Re-Input as integer number\n");
    return 0;}
}
int isInt(float val)
{
    int i = (int) val;
    if( i != val)
      return 0;  
    else
      return 1; 
}
int oddEven(int val){
    if(val%2==0){
      return 1;
      }else{
      return 0;
        }
}