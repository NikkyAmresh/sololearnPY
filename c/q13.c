#include <stdio.h>
 int main() { 
     count_vc("NPTEL Week 7 assignment");
     count_vc("Indian Institute of Technology, Kharagpur");
      return 0; 
}
int count_vc(char line[150]){
    int i, vowels, consonants; 
     vowels = consonants = 0;
      for(i=0; line[i]!='\0'; ++i) { 
       if(line[i]=='a' || line[i]=='e' || line[i]=='i' || line[i]=='o' || line[i]=='u' || line[i]=='A' || line[i]=='E' || line[i]=='I' || line[i]=='O' || line[i]=='U')
        {
             ++vowels; 
         } else if((line[i]>='a'&& line[i]<='z') || (line[i]>='A'&& line[i]<='Z')) {
          
        ++consonants; 
        } }
        printf("Total number of vowel = %d",vowels);     
      printf("\nTotal number of consonants = %d\n",consonants);
      return 0;
}