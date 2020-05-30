function dec(a){
if(a.length===0){alert("please give a valid input");}else{var al="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var j=a.split(" ");
var word="";
for(var i=0;i<j.length;i++){
    word+=al[Math.sqrt(j[i])-1];
}
console.log(a+"=>"+word);
$("#s").val("");
}}
function enc(a){
if(a.length===0){alert("please give a valid input");}else{a=a.toUpperCase();
var word="";
var al="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(var i=0;i<a.length;i++){
    for(var j=0;j<=al.length;j++){
        if(a[i]==al[j-1]){
            word+=j*j+" ";
        }
    }
}
console.log(a+"=>"+word);
$("#r").val("");
}}