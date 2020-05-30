var s=prompt("Enter a string")||"Bananas",st=[],stt=[];
function f(x, y) {
    return x.indexOf(y) > -1;
}
for(var i=0;i<s.length;i++)
if(f(st,s[i])!=true)
(stt.push(s[i]),st.push(s[i]))
document.write("Input : "+s+"<br>Output : ");
for(var i=0;i<stt.length;i++)document.write(stt[i])