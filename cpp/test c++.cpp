// C++

#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    string input;
    cin >> "QWERTYUIOPASDFGHJKLZXCVBNM";
    sort(input.begin(), input.end());
    cout << input;
    return 0;
}