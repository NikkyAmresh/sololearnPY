// Created by ChessMaster

var canvas, g, size, iteration = 0, div = 30, hue = 0;

onload = function() {
    canvas        = document.getElementsByTagName("canvas")[0];
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    g             = canvas.getContext("2d");
    var w         = canvas.width;
    var h         = canvas.height;
    size          = w > h ? h * 0.7 : w * 0.7;
    x             = w;
    y             = h;
    
    g.translate(w / 2, h / 2);
    
    setInterval(draw, 5);
}

function draw() {
    if(size < 1)
        return;

    g.strokeStyle = "hsl(" + hue + ", 75%, 50%)";
    g.beginPath();
    g.rect(-size / 2, -size / 2, size, size)
    g.stroke();
    g.closePath();
    
     g.strokeStyle = "hsl(" + (hue + 180) + ", 75%, 50%)";
    g.beginPath();
    g.arc(size, size, size / 5, 0, 2 * Math.PI);
    g.stroke();
    g.closePath();
    g.rotate(Math.PI / div);
    
    if(++iteration > div / 2) {
        if(hue % 2 == 0)
            size *= 0.7;
        else
            size *= 1.4;
        hue += 5;
        iteration = 0;
    }
}