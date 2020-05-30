$(function(){
var x="Hi my name is Nikky\n how are you";
y=x.split("");
var i=0;
while(i<x.length){
$("#h").append(y[i]);
$("#h").append("|").delay();
var e=document.getElementById("h").innerHTML;
document.getElementById("h").innerHTML=e.substring(0,e.length-1)
 i++;
 }
}) 