#include<stdio.h>
//#include<conio.h>
int main()
{
    int i,j,k,n,a;
   // clrscr();
    printf("Enter the number of rows : ");
    scanf("%d",&n);
    for(i=0; i<=n; i++)
    {
        for(k=1; k<=n-i; k++)
      {
        printf(" ");
      }
      a=1;
        for(j=1; j<=i; j++)
        {
            printf("%d ",a);
            a=a*(i-j)/j;
        }
        printf("\n");
    }
   // getch();
}