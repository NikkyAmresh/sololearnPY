// Created by The Coding Sloth

alert("Be patient and click to restart");

onload = function() {
    c = document.createElement("canvas");
    ctx = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    
    document.body.appendChild(c);
    i = setInterval(draw, 0);
}

onclick = function() {
    clearInterval(i);
    
    a1  = 0;
    a2  = 0.5;
    n   = 0;
    r   = 1;
    v   = 0.25;
    
    ctx.clearRect(0, 0, c.width, c.height);
    i = setInterval(draw, 0);
}

var a1  = 0;
var a2  = 0.5;
var n   = 0;
var r   = 1;
var v   = 0.25;

function draw() {
    a1++;
    a2++;
    r *= 1.01;
    
    if(r >= c.height) {
        n  += v;
        a1  = 0 + n / 2;
        a2  = 0 + n;
        r   = 1;
    }
        
        
    ctx.fillStyle = "hsl(" + r + ", 75%, 50%)";
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, r, a1, a2);
    ctx.fill();
}