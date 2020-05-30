//alert("4 Downvotes yet");
var n=prompt("Enter a Number Between 2-10",8)||9;
var c=0;
var rand_princess=Math.floor(Math.random()*(n*n));
function rand_b(){
    c=Math.floor(Math.random()*(n*n));
    return c==rand_princess?(rand_b()):c;
}
var b=rand_b();
var pr=b;
$(function(){
var t=$("table");
t.append("<tr>");
for(var i=0;i<n*n;i++){
    if(i==rand_princess){
        t.append("<td><img width=30px height=30px src='https://png.pngtree.com/element_pic/00/16/10/1257fd41d043f82.jpg'></td>");
    }else{
    if(i==b){
        t.append("<td><img width=30px height=30px src='http://pngimg.com/uploads/pirate/pirate_PNG67.png'></td>");
    }else{
        t.append("<td></td>")
    }
    }
   ((i+1)%n==0)&&t.append("</tr><tr>");
}
var grid=new Array();
var temp=new Array();
for(var i=0;i<n*n;i++){
    i==rand_princess?temp.push("P"):i==b?temp.push("B"):temp.push("-");
    (i+1)%n==0&&(grid.push(temp),temp=new Array());
}
function find_p(){
    return p={x:rand_princess%n,y:Math.floor(rand_princess/n)}
}
function find_b(){
    return b={x:b%n,y:Math.floor(b/n)}
}
find_p();find_b();
function path(xy){
    document.getElementsByTagName("td")[b.x+(b.y*n)].innerHTML=xy;
}
function solve(){
var left=0;
var right=0;
var up=0;
var down=0;
while(p.x<b.x){left++;b.x--;path("⬅️");}
while(p.x>b.x){right++;b.x++;path("➡️");}
while(p.y<b.y){up++;b.y--;path("⬆️");}
while(p.y>b.y){down++;b.y++;path("⬇️");}
document.getElementsByTagName("td")[rand_princess].innerHTML="<img width=30px height=30px src='https://png.pngtree.com/element_pic/00/16/10/1257fd41d043f82.jpg'></td>";
left!=0&&r(left+" times left<br>");
up!=0&&r(up+" times up<br>");
right!=0&&r(right+" times right<br>");
down!=0&&r(down+" times down<br>");
$("#sol").html("Save Princess");
$("#sol").click(go);
function r(x){
    $("#res").append(x);
}
function go(){
    document.getElementsByTagName("td")[rand_princess].innerHTML="<img width=15px src='https://png.pngtree.com/element_pic/00/16/10/1257fd41d043f82.jpg'><img width=15px src='http://pngimg.com/uploads/pirate/pirate_PNG67.png'></td>";
   document.getElementsByTagName("td")[pr].innerHTML=" ";
   $("#sol").html("Princess Saved");
   $("#sol").attr("disabled","true");
}
}
$("#sol").click(solve);
});