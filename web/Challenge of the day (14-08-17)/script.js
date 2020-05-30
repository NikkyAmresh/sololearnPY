function bin(x){
    var a=x;
    var b="";
    while(x>0){
        b=(x%2).toString()+b;
        x=Math.floor(x/2); 
    } 
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
   return p;
}
var arr= new Array;
var arr2= new Array;
var arr3=new Array;
var results = []; 
var l=1;
var list=parseInt(prompt("Enter range (1-n)"));
for(var z=0;z<=list;z++){
     arr.push(z);
     arr2.push(bin(z));
}
   var sorted_arr = arr2.slice().sort(); 
for (var y= 0; y< arr2.length - 1; y++) {
 if (sorted_arr[y + 1] == sorted_arr[y])
  { results.push("\n("+l+") "+sorted_arr[y]);
    arr3.push(y);
    l++;
   } }
coun=arr3.length;
alert(coun +" Quark - pair(s) found from 1 to "+list+" : "+ results);