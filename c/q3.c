#include <stdio.h>
int series(int);
int main() {
    series(4);
    series(6);
    series(5);
    series(7);
    return 0;
}
int series(int num){
    int i;
   for(i=1;i<=num;i++){
        printf("%d",i);
    }
    printf("\n");
    return 0; 
}