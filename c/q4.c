#include <stdio.h>
int perfect_num(int);
int main() {
    perfect_num(6);
    perfect_num(28);
    perfect_num(45);
    perfect_num(496);
    perfect_num(678);
}
int perfect_num(int num){
    int i ,x ,ttl=0;
    for(i=1;i<=(num-1);i++){
        x=num%i;
        if(x==0){
          ttl=ttl+i ; 
        }
    }
    printf((ttl==num)?"Yes":"No");
    return 0;
}