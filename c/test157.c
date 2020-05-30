#include <stdio.h>

int main() 
{
   int number;
   
   printf("Enter an integer: ");
   scanf("%d", &number);
   if(roundf(number) == number){
           if (number%2==0)
       {
           printf("Even");
       }else{

       }        
           }else{
               printf("non integer")
           }
          
   return 0; 
}