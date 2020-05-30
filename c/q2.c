#include <stdio.h>
float clclt_bill(int);
int main() {
        printf("%f \n",clclt_bill(50));
        printf("%f \n",clclt_bill(300));
        printf("%f \n",clclt_bill(500));
        printf("%f \n",clclt_bill(700));
        printf("%f \n",clclt_bill(80));
        printf("%f \n",clclt_bill(200));
    return 0;
}
float clclt_bill(int unt){
    float final_bill;
    if(unt<=199){
        final_bill=unt*1.2;
    }else if(unt>=200 && unt<400){
        final_bill=unt*1.5;
    }else if(unt>=400 && unt<600){
        final_bill=unt*1.8;
    }else{
        final_bill=unt*2;
    }
    if(final_bill<=100){
        final_bill=100;
    }else if(final_bill>400){
        final_bill=final_bill*1.15;
    }
    return final_bill;
}