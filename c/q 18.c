#include <stdio.h>

void swap (int *num1, int *num2);

int main() {
    int num1 = 12;
    int num2 = 45;

    swap(&num1, &num2);
    printf("num1 = %d, y = %d\n", num1, num2); 

    return 0;
}
 
void swap (int *num1, int *num2) {
    int temp;
    
    temp = *num1;
    *num1 = *num2;
    *num2 = temp;
}