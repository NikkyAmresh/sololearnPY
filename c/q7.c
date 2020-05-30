#include <stdio.h>
int factorial(int);
int main() {
   printf("%d \n",factorial(5));
   printf("%d \n",factorial(-10));
   printf("%d \n",factorial(7));
   printf("%d \n",factorial(3));
   printf("%d \n",factorial(4));
    return 0;
    
}
int factorial(int num){
    if(num<0){
        printf("Invalid number");
        return NULL;
    }else{
        int i=1,j=1;
        do{
            j=j*i;
            i++;
        }while(i<=num);
        return j;
    }
}