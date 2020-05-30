var c="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var text="a";
var num=0;
for(var i=0;i<text.length;i++){
    for(var j=0;j<c.length;j++){
        if(text[i].toUpperCase()==c[j]){
            num+=i+j;
            }
    }
    
}
console.log(num)