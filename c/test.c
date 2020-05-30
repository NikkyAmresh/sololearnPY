#include <stdio.h>
int isInt(float);
int oddEven(int);
int res(float);
int main() {
    float x=65.7;
    float y=2;
   // scanf("%f",&x);
     res(x);
     res(y);
     res(z);
     
     //printf("%d",oddEven(x)) ;
    
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
        printf("Even");
        break;
    case 2:
        printf("Odd");
        break;
    case 3:
        printf("not e");
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