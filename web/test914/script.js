n=187;
var t=0;
function find(n,t){
if(n[n.length-1]%2==0){
    console.log("got")
}else{
    console.log("nope")
    plus(n,t);
    minus(n,t)
}
}
function minus(n){
    return n--;
    t++;
}
function plus(n){
    return n++;
    t++;
}