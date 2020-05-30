#include <stdlib.h> 
#include <stdio.h> 
int cmp_int(const void *a, const void *b ){ 
    return *(int*)a - *(int*)b;
} 
int main() { 
    int a[] = { 1, 5, 3, 2, 0, 5, 7, 6 };     
    const int n = sizeof(a) / sizeof(a[0]); 
    qsort(a, n, sizeof(a[0]), cmp_int); 
    printf("%d %d\n", a[n-1], a[n-2]);
}


