var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var s=prompt("Enter a string")||"mduhmSYMSKH&994=9)49)4)94)KHDHM";
var st=[];
for(var i=0;i<s.length;i++){
    if(f(a,s[i])===true)st.push(s[i]);
}
function f(x, y) {
     return x.indexOf(y) > -1;
 }

document.write("Input : "+s+"<br>Output :");
for(var i=0;i<st.length;i++){
    document.write(st[i])
}
//it can be minimize in only one line... I didn't use any function like "replace()" or anything... 