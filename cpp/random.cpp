#include <iostream>
#include <stdio.h> 
#include <stdlib.h> 
#include <time.h> 
using namespace std;
//my first CPP code... 
int main()
{
    srand (time(NULL));
    int i= rand() % 7;
    string arr[] ={"Hello World","Omm","BTW","Oops ","Yeah", "Imm","apk", "Aww"};

        cout << arr[i]<< endl;

    return 0;
}
