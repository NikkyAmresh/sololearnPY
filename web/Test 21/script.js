// Created by #00FF00

window.onload = function(){
var d= new Date();
document.getElementById("issue-date").innerHTML = "Issued " + d;
}
function validateForm() {
var x=document.forms["myform"]["courses"].value;

var c = document.getElementById("course");

var p = document.getElementById("c-text");
    
if (x=="html") {
c.innerHTML = "HTML Fundamentals course";
p.innerHTML = "HTML";
}

else if (x=="sql"){
    c.innerHTML = "SQL Fundamentals course";
p.innerHTML = "SQL";
}
    
else if (x=="java"){
    c.innerHTML = "Java";
p.innerHTML = "Java";
}

 else if (x=="swift"){
    c.innerHTML = "Swift Fundamentals course";
p.innerHTML = "Swift";
}
else if (x=="python"){
    c.innerHTML = "Python 3 Tutorial course";
p.innerHTML = "Python3";
}
    
else if (x=="css"){
    c.innerHTML = "CSS Fundamentals course";
p.innerHTML = "CSS";
}
    
else if (x=="ruby"){
    c.innerHTML = "RubyTutorial course ";
p.innerHTML = "Ruby";
}
    
else if (x=="php"){
    c.innerHTML = "PHP Tutorial course";
p.innerHTML = "PHP";
}
    
else if (x=="jquery"){
    c.innerHTML = "jQuery Tutorial course";
p.innerHTML = "jQuery";
}
    
else if (x=="c++"){
    c.innerHTML = "C++ Tutorial course";
p.innerHTML = "C++";
}
    
else if (x=="c#"){
    c.innerHTML = "C# Tutorial course";
p.innerHTML = "C#";
}
    
else if (x=="js"){
    c.innerHTML = "JavaScript Tutorial course";
p.innerHTML = "JS";
}
    
else {
alert("⚠certificate not available!⚠")
$("#ok").hide();
    }                    

var y=document.forms["myform"]["name"].value;
if (y==y) {
    document.getElementById("name").innerHTML = y;
}
else if (y==null || y=="") {
alert("Your name must be filled out");
}
var a = Math.floor(Math.random() * 10000) + 1000;
var z=document.forms["myform"]["solo_id"].value;
if(z==z){
    document.getElementById("solo-id").innerHTML = "Certificate #" + a + "-" + z;
}
else if (z==null || z=="") {
alert("Id must be filled out");
}
}