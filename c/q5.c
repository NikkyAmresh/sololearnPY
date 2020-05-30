#include <stdio.h> 
int is_prime(int);
int main() { 
    is_prime(15);
    is_prime(17);
    is_prime(40);
    is_prime(2);
    is_prime(71);
    is_prime(60);  
return 0; 
}
int is_prime(int n){
    int i,flag=0;
    for(i = 2; i <= n/2; ++i) {
        if(n%i == 0) { 
            flag = 1; 
        break; 
        } 
    } 
    printf((flag==0&&n!=1)?"Prime\n":"NotPrime \n",n);
    return 0;
}