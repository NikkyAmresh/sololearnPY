
var t1=setInterval(fun,100);
function fun(){
var random1=Math.floor(Math.random()*225);
var random2=Math.floor(Math.random()*225);
var random3=Math.floor(Math.random()*225);
document.body.style.backgroundColor="rgb("+random1+","+random2+","+random3+")";
document.createElement("input");

}

$(function(){
$(document).on('touchstart', '#box', function(e) { 
var xPos = e.originalEvent.touches[0].pageX; 
var yPos = e.originalEvent.touches[0].pageY; 
document.writeln(Math.floor(xPos));
document.writeln(Math.floor(yPos)) ;
   $("#box").css({font:xPos});
    
});
});