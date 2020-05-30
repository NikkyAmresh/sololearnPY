#include <stdio.h>

int main() {
    sorht(1,2,5,3,9,6);
    return 0;
}
int sorht(int array[100]){
    int n, c, d, swap;
    for (c = 0 ; c < n - 1; c++){
        for (d = 0 ; d < n - c - 1; d++){
            if (array[d] > array[d+1]){
                swap = array[d];
                array[d] = array[d+1];
                array[d+1] = swap;
            }
        }
    }
    for (c = 0; c < n; c++){
        printf("%d\n", array[c]);
    }
    return 0;
}