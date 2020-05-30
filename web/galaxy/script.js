$(function(){
var width=document.documentElement.clientWidth;
var height=document.documentElement.clientHeight;
var x,y;
for(var i=0;i<100;i++){
  x=Math.floor(Math.random()*width)+1;
 y=Math.floor(Math.random()*height)+1;
  $("div").append("<span></span>");
  $("span")[i].css("left",x);
  $("span")[i].css("top",y);
}
});
