var c="361 225 144 225 144 25 1 324 196";
var al="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var j=c.split(" ");
for(var i=0;i<j.length;i++){
    document.write(al[Math.sqrt(j[i])-1])
}