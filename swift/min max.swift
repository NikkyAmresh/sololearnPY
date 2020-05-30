var list=[4,7,3,5,3,9]
var max=list[0]
var min=list[0]
for i in 0...(list.count-1){
    if(list[i]>max){
        max=list[i]
    }
    if(list[i]<min){
        min=list[i]
    }
}
print(max)
print(min)