//JSfied by Nikky Amresh
// Created by Ranjan
var name = prompt("Enter Your Name");
alert("Hi @" + name + "\n\nThanks for running this code\n\n\And it might took some time to load. Pls wait until visual output arrives.\n\n░░╚══╗░╔═╔════╝\n╚═╦═╗╠═╩═╩╗╔═╦═╗\n░░║▒╠╣▒▒▒▒╠╣▒║▒║\n╔═╩═╝╠═╦═╦╝╚═╩═╝\n░░╔══╝░╚═╚════╗\n\nNot Available")
function getRandomColor(){
var l='0123456789ABCDEF';
var color="#";
for(var i=0;i<6;i++)color+=l[Math.floor(Math.random()*16)];
return color;}
function setRandomColor() {
    for(i=1;i<13;i++)$("li:nth-child("+i+")").css("background-color",    getRandomColor());
    setInterval(setRandomColor,500);}
$(function(){$(".circle").css({"width":"17px","height":"17px","border-radius":"50%","border-color":"transparent","background-color":"#000","z-index":10});
var sc=["20","30","60","90","120","150","180","210","240"], s=["smaller3","smaller2","smaller1","smaller", "small","middle","big","bigger","bigger1"],li="",c="<li></li>",p="-petal",ro=0,z=9;
    for(var i=0;i<12;i++)li=li+c;
    for(var i=0;i<s.length;i++)$(".span").append("<div class="+s[i]+p+"></div>"),$("."+s[i]+p).html(li);
   for(var i=1;i<13;i++)$("li:nth-child("+i+")").css("transform", "rotate("+ro+"deg)"),ro+=15;
   $("li").css({"display":"inline-block","border-width":"1px","list-style-type":"none","border-style":"solid","border-color":"green","border-radius":"100% 0%"});
  for(var i=0;i<s.length;i++)$("."+s[i]+p).css({"width":sc[i] +"px","height":sc[i]+"px","z-index":z}),z--;
  $("*").css({"position":"absolute","left":0,"margin-left":"auto","right":0,"margin-right":"auto","top":0,"margin-top":"auto","bottom":0,"margin-bottom":"auto"});
  $("a").css({"position":"relative","left":"0px"});
});
/* credit: Sunday Power Inemesit */
//Thanks to everyone for visiting this code.
//Thanks for null upvotes😉😊.