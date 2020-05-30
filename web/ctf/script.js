var x=prompt("Enter the number");
var x2=prompt("Enter the second number");
var res=""
function bin(x){
    var a=x;
    var b="";
    if(x!=0){
    while(x>0){
        b=(x%2).toString()+b;
        x=Math.floor(x/2); 
    } }
  var c, co;
  t=b.length;
    c=b.split("");
    co="";
    for(var i=0;i<t;i++){
        co+=c[i]+"+";
    }
    var con = co.substring(0, co.length-1);
    count=eval(con);
    p=a*count;
  res+="<hr>Your Number is "+a+"<br>bin("+a+")="+b+"<br>count="+count+"<br>"+a+"*"+count+"="+p;
   return p;
}
alert(bin(x));
alert(bin(x2));
r=bin(x)==bin(x2);
r2="<hr size=10>"+x+","+x2+"\npairs : <b>"+r;
document.writeln(res);
document.write(r2);
