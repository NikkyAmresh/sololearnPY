#include <stdio.h>
int main(){
   compare("abc","ABC");
   compare("ABCD","ABCD");
   compare("ABCD","abcd");
   compare("123","123");
    
   return 0;
}

int compare(char str1[10],char str2[10]) {
    
    int i=0,ct1=0,ct2=0,flag=0;

    while (str1[ct1] != '\0'){
        ct1++;    
    }
    while (str2[ct2] != '\0'){
        ct2++;    
    }
    while ((i < ct1) && (i < ct2)){
        if (str1[i] == str2[i]){
            i++;
            continue;
        }
        if (str1[i] < str2[i]){
            flag=1;
            break;
        }
        if (str1[i] > str2[i]){
            flag=-1;
            break;
        }
    }
    
    if(flag==0){
        printf("Strings are equal\n");
    }else if(flag==-1){
        printf("String 1 is greater than String 2\n");
    }else if(flag==1){
           printf("String 1 is less than String 2\n");
   }        
    return 0;
}
