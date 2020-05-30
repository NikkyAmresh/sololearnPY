$(document).ready(function(){
var top1="F05C5B";
var top2="449E0A";
var i = 0;
var i1=0;
var i2=0;
setInterval(function(){
  $("#top").append(top1[i]);
   i++;
    }, 90);
setInterval(function(){$("#top").html(""),i=0;},3000);
setInterval(function(){
    $("#middle").append(top2[i1]);
   i1++;}, 90);
setInterval(function(){$("#middle").html(""),i1=0;},2000);
 setInterval(function(){
    $("#bottom").append(top2[i2]);
   i2++;}, 90);
 setInterval(function(){$("#bottom").html(""),i2=0;},5000);
alert("If you can't see the svg(man pic),please let me know in comment box.");
    
})
;