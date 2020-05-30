a=["USA","INDIA","FRANCE", "INDIA", "CHINA", "USA", "FRANCE", "INDIA","CHINA"];
/*
    b[0],b[5]="USA";
    b[1],b[3],b[7]="INDIA";
    b[2],b[6]="FRANCE";
    b[4],b[8]="CHINA";
alert(b);
*/
function min(arr){
    var b=[];
    for(var i=0;i<arr.length;i++){
        b.splice(i, 0, arr[i]);
    }
   return b;
}
//document.write(min(a));
var b=[];
b.splice((3,2,3),0, a[1]);
document.write(b);