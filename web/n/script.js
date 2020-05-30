
function bin(x){
    var a=x;
    var b="";
    while(x>0){
        b=(x%2).toString()+b;
        x=Math.floor(x/2);
    }return b; }
 function bn(b) {var c, co;
  t=b.length;  
  c=b.split("");
    co="";
    for(var i=0;i<t;i++){
        co+=c[i]+"+";
    }
    var con = co.substring(0, co.length-1);
    count=eval(con);
     return count;
}
function ml(x,y){
    return x*bin(y);
}
var arr= new Array;
var arr2= new Array;
var arr3=new Array;
var list=parseInt(prompt("Enter range (0-n)"));
var results = []; 
var l=1;
for(var i=0;i<list+1;i++){
    for(var j=0;i<list+1;j++){
        if(i!=j && ml(i)==ml(j)&& i<j){
            arr3.push;
       }}
}
coun=arr3.length;
alert(coun +" Quark - pair(s) found : "+ results);