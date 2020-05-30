$(function(){function level(){
$("#level").change(function(){
$("#screen").hide(),game(level=$("#level").val())})}
function game(level){
$("#button").show(),
$("#ans").show(),
$("#next").hide(),
$("#form")[0].reset(),
$("#ans").focus(),
$("#eq").html("?");
var n1,n2,op,o,oprator,ans;
n1=Math.floor(Math.random()*level),
oprator=["+","-","*","**","%"],
op=Math.floor(5*Math.random()),
o=oprator[op],
"**"==o?n2=Math.floor(5*Math.random()):
"%"==o?n2=Math.floor(Math.random()*level)+1:
n2=Math.floor(Math.random()*level),
$("#question").html(n1+o+n2),
$("#button").click(function(){
var value=eval(document.getElementById("question").innerText);
ans=$("#ans").val(),
value==ans?(res="<font color=green>Correct</font>",result=5):
(res="<font color=red>Wrong</font>",result=-1)
,score=result+score,
$("#next").hide(),
$("#result").show(),
$("#eq").html(value),
$("#result").html(res),
$("#score").html("Score: "+score),
$("#next").show(),
$("#button").hide(),
$("#ans").hide()}),
$("#score").html("Score: "+score)}window.onload=function(){
level(),
score=0,
result=0},
$("#next").click(function(){
$("#score").html("Score: "+score),
$("#result").hide(),game(level)})});