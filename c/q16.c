#include <stdio.h>

int main() {
    printf("%d",power(5,2));
    printf("%d",power(3,3));
    printf("%d",power(10,2));
    printf("%d",power(2,5));
    return 0;
}
int power(int x,int y){
    if(y){
        return (x*power(x,y-1));
    }
    return 1;
}