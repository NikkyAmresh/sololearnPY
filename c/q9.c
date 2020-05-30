#include <stdio.h> 
int main() { 
    printf("Sum of digits %d = %d\n", 1234, sotd(1234)); 
    printf("Sum of digits %d = %d\n", 5567, sotd(5567)); 
    printf("Sum of digits %d = %d\n", 708, sotd(708)); 
    printf("Sum of digits %d = %d\n", 3118, sotd(3118)); 
    printf("Sum of digits %d = %d\n", 5006, sotd(5006)); 
    return 0; 
}
int sotd(int num){
    int sum=0;
    while(num!=0){
        sum+=num%10;
        num=num/10;
    }
    return sum;
}