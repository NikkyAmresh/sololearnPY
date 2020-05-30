// Created by ☀Brains

p=prompt("Enter your sololearn Id to customise your Profile.E.g 3123457")
p2=prompt("Enter your Name");
var a=document.getElementsByClassName("parent");
var b=document.getElementsByClassName ("vibrate"); c=document.getElementsByClassName("profpic");
 d=document.getElementsByClassName("profname")
window.onload=function(){
setTimeout(vibrate,5000)
function vibrate(){navigator.vibrate(500);
b[0].innerHTML="Notifications(2)";}
pfp=setInterval(pfp,2000);}
function editpfp(){
    p=prompt("enter your sololearn id e.g 5134217");
    if(typeof p2=="string"||typeof p2=="number"){d[0].innerHTML=p2;}
    
}
function pfp(){if(typeof p=="string")
{
if(p!=null){c[0].innerHTML="<img src='https://api.sololearn.com/Uploads/Avatars/"+p+".jpg' width='87px' height='89px'/>";
clearInterval(pfp);}
}

if(typeof p2=="string"||typeof p2=="number"){d[0].innerHTML=p2;}}
function Nchange(){
    a[0].innerHTML="<p  style='color:black;top:-13px;left:0px;position:relative;'>Request accepted</p>";
    $("#request1").css("background-color","#ffffdd");}
function Ndelete(){
    a[0].innerHTML="<p  style='color:black;top:-13px;left:0px;position:relative;'>Request removed</p>";
    $("#request1").css("background-color","#ffffdd");
}
function Amchange(){
    a[1].innerHTML="<p  style='color:black;top:-13px;left:0px;position:relative;'>Request accepted</p>";
    $("#request2").css("background-color","#ffffdd");
}
function Amdelete(){
    a[1].innerHTML="<p  style='color:black;top:-13px;left:0px;position:relative;'>Request removed</p>";
    $("#request2").css("background-color","#ffffdd");
}
function Nichange(){
    a[2].innerHTML="<p  style='color:black;top:-13px;left:0px;position:relative;'>Request accepted</p>";
    $("#request3").css("background-color","#ffffdd");
    $("#online2").css("opacity","1");
    $("#greendot2").css("opacity","1");
}
function Nidelete(){
    a[2].innerHTML="<p  style='color:black;top:-13px;left:0px;position:relative;'>Request removed</p>";
    $("#request3").css("background-color","#ffffdd");
}function Hachange(){
    a[3].innerHTML="<p  style='color:black;top:-13px;left:0px;position:relative;'>Request accepted</p>";
    $("#request4").css("background-color","#ffffdd");
    $("#last").css("opacity","0");
    $("#last2").css("opacity","0");
}
function Hadelete(){
    a[3].innerHTML="<p  style='color:black;top:-13px;left:0px;position:relative;'>Request removed</p>";
    $("#request4").css("background-color","#ffffdd");
    $("#last").css("opacity","0");
    $("#last2").css("opacity","0");}
function Home(){    
$("#homebody").css("opacity","1");
$("#homebody").css("z-index","1");
    $("#brainpost").css("opacity","1");
    $("#brainpost").css("z-index","1");
$("#profbody").css("opacity","0");
$("#profbody").css("z-index","0");
$("#messbody").css("opacity","0");
$("#messbody").css("z-index","0");
$("#notifbox").css("opacity","0");
$("#notifbox").css("z-index","0");
$("#chatbox").css("opacity","0");
$("#chatbox").css("z-index","0");
$("#friendbox").css("opacity","0");
$("#friendbox").css("z-index","0");
$("#menubox").css("opacity","0");
$("#menubox").css("z-index","0");
   }
function Profile(){$("#homebody").css("opacity","0");
$("#homebody").css("z-index","0");
    $("#brainpost").css("opacity","0");
    $("#brainpost").css("z-index","0");
$("#profbody").css("opacity","1");
$("#profbody").css("z-index","1");
$("#messbody").css("opacity","0");
$("#messbody").css("z-index","0");
$("#notifbox").css("opacity","0");
$("#notifbox").css("z-index","0");
$("#chatbox").css("opacity","0");
$("#chatbox").css("z-index","0");
$("#friendbox").css("opacity","0");
$("#menubox").css("opacity","0");
$("#menubox").css("z-index","0");
$("#friendbox").css("z-index","0");
}

function Mess(){
$("#homebody").css("opacity","0");
$("#homebody").css("z-index","0");
    $("#brainpost").css("opacity","0");
    $("#brainpost").css("z-index","0");
$("#profbody").css("opacity","0");
$("#profbody").css("z-index","0");
$("#messbody").css("opacity","1");
$("#messbody").css("z-index","1");
$("#notifbox").css("opacity","0");
$("#notifbox").css("z-index","0");
$("#chatbox").css("opacity","0");
$("#chatbox").css("z-index","0");
$("#friendbox").css("opacity","0");
$("#friendbox").css("z-index","0");
$("#menubox").css("opacity","0");
$("#menubox").css("z-index","0");

}
function Notif(){$("#homebody").css("opacity","0");
$("#homebody").css("z-index","0");
    $("#brainpost").css("opacity","0");
    $("#brainpost").css("z-index","0");
$("#profbody").css("opacity","0");
$("#profbody").css("z-index","0");
$("#messbody").css("opacity","0");
$("#messbody").css("z-index","0");
$("#notifbox").css("opacity","1");
$("#notifbox").css("z-index","1");
$("#chatbox").css("opacity","0");
$("#chatbox").css("z-index","0");
$("#friendbox").css("opacity","0");
$("#menubox").css("opacity","0");
$("#menubox").css("z-index","0");
$("#friendbox").css("z-index","0");
    
}
function Chat(){$("#homebody").css("opacity","0");
$("#homebody").css("z-index","0");
    $("#brainpost").css("opacity","0");
    $("#brainpost").css("z-index","0");
$("#profbody").css("opacity","0");
$("#profbody").css("z-index","0");
$("#messbody").css("opacity","0");
$("#messbody").css("z-index","0");
$("#notifbox").css("opacity","0");
$("#notifbox").css("z-index","0");
$("#chatbox").css("opacity","1");
$("#chatbox").css("z-index","1");
$("#friendbox").css("opacity","0");
$("#friendbox").css("z-index","0");
$("#menubox").css("opacity","0");
$("#menubox").css("z-index","0");
}
function Friends()
{$("#homebody").css("opacity","0");
$("#homebody").css("z-index","0");
    $("#brainpost").css("opacity","0");
    $("#brainpost").css("z-index","0");
$("#profbody").css("opacity","0");
$("#profbody").css("z-index","0");
$("#messbody").css("opacity","0");
$("#messbody").css("z-index","0");
$("#notifbox").css("opacity","0");
$("#notifbox").css("z-index","0");
$("#chatbox").css("opacity","0");
$("#chatbox").css("z-index","0");
$("#friendbox").css("opacity","1");
$("#menubox").css("opacity","0");
$("#menubox").css("z-index","0");
$("#friendbox").css("z-index","1");
    
}
function Menu(){
$("#homebody").css("opacity","0");
$("#homebody").css("z-index","0");
    $("#brainpost").css("opacity","0");
    $("#brainpost").css("z-index","0");
$("#profbody").css("opacity","0");
$("#profbody").css("z-index","0");
$("#messbody").css("opacity","0");
$("#messbody").css("z-index","0");
$("#notifbox").css("opacity","0");
$("#notifbox").css("z-index","0");
$("#chatbox").css("opacity","0");
$("#chatbox").css("z-index","0");
$("#friendbox").css("opacity","0");
$("#menubox").css("opacity","1");
$("#menubox").css("z-index","1");
$("#friendbox").css("z-index","0");
    
}
    
    
