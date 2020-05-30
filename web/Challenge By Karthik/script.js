var n=5;
var k=[];
for(var i=0;i<n;i++){
    k.push(i+1)
}
var l=k.length;
var p;
document.write("<pre>");
for(i=0;i<l/2;i++){
  for(var h=0;h<i;h++){
        document.write(" ")
    }
    document.write(i+1);
    for(var j=l/2-(i+1);j>0;j--){
        document.write(" ")
    }
    for(var j=l-(i+1);j>1;j--){
        document.write(" ")
    }
    
    document.write(k[i]);
    
    document.write("<br>");
}
document.write("</pre>")