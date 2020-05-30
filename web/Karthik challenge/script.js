function result(x){
 document.write("Your input : " +x+"<br> Output : ")
    for(var i=0;i<x.length;i=i+2){
        if(typeof x[i]!=Number)for(var j=0;j<x[i+1];j++)document.write(x[i]);}}
result(prompt("Enter the pattern like : a2b4c7","A1n2C4f3")||"A1z2r4H3")