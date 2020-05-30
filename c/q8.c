#include <stdio.h>
int lcm(int,int,int);
int gcf(int,int);
int main() {
    printf("LCM = %d\n",lcm(4,16,gcf(4,16)));
    printf("LCM = %d \n",lcm(25,35,gcf(25,35)));
    printf("LCM = %d \n",lcm(25,31,gcf(25,31)));
    printf("LCM = %d \n",lcm(30,40,gcf(30,40)));
    printf("LCM = %d \n",lcm(7,40,gcf(7,40)));
    return 0;
}
int lcm(int x,int y,int gcf){
    return (x*y)/gcf;
}
int gcf(int x, int y){
    int t;
    while(y!=0){
        t=y;
        y=x%y;
        x=t;
    }
    return x;
}