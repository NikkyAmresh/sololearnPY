n=5;
var k;
for(var i=1;i<=n;i++){
    document.write(i);
    for(var j=i;j>0;j--){
        document.write(" "+eval(k+n));
    }
    document.write("<br>");
    k=i;
}
/*
1
2 6
3 7 10 
4 8 11 13
5 9 12 14 16

*/