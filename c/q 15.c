#include <stdio.h> 
int is_prime(int);
int main() { 
    isPrime(5);
    isPrime(10);
    isPrime(23);
    isPrime(22);
return 0; 
}
int isPrime(int n){
    int i,flag=0;
    for(i = 2; i <= n/2; ++i) {
        if(n%i == 0) { 
            flag = 1; 
        break; 
        } 
    } 
    printf((flag==0&&n!=1)?"%d is Prime number\n":"%d is Not Prime Number\n",n);
    return 0;
}