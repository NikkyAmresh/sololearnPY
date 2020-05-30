// Created by CalebHM

$(document).ready(function() {

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var circles = [1];
var rx = 0;
var ry = 0;

$(canvas).click(function(ev) {
   circles.push({centx: ev.clientX, centy: ev.clientY, x: rx, y: ry, c1: Math.floor(Math.random()*255), c2: Math.floor(Math.random()*255), c3: Math.floor(Math.random()*255), opac: 1, lw: Math.floor(3+Math.random()*3)});
});

/*
Change values above and comment out lines within the grow function such as fillStyle to get different, fun results!
*/

grow = function () {
    for (i = 0; i < circles.length; i++) {
        circles[i].x +=1.25;
        circles[i].y +=1.25;
        ctx.lineWidth = circles[i].lw;
        ctx.strokeStyle = "rgba(" + circles[i].c1 + ", " + circles[i].c2 + ", " + circles[i].c3 + ", " + circles[i].opac + ")";
        ctx.fillStyle = "rgba(" + circles[i].c1 + ", " + circles[i].c2 + ", " + circles[i].c3 + ", " + circles[i].opac + ")";
        ctx.beginPath();
        ctx.ellipse(circles[i].centx, circles[i].centy, circles[i].x, circles[i].y, 0, 0, 2*Math.PI);
        // ctx.stroke();
        ctx.fill();
        ctx.closePath();
        circles[i].opac -= 0.007;
        if (i == 0){
           ctx.clearRect(0,0,355,500);
        }
        if (circles[i].opac <= 0) {
           circles.splice(i, 1);
        }
    }
}

setInterval(grow, 10);

});