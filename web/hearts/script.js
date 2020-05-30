// Created by Deepali

var canvas,ctx;
var n = 10;
var cx,cy;
var rad = 100;

var delta = 0;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");

    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    cx = ctx.canvas.width/2;
    cy = ctx.canvas.height/2;

    draw();
}

function draw () {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    delta += 0.02;

    for(var i=5;i<n;i++){

        var r = rad*Math.abs(Math.sin(i*delta/2));
 
      var gradient=ctx.createLinearGradient(
        cx-r,cx-r,
        cx+r,cy+r);
 
      gradient.addColorStop(0,"#ffabac");
      gradient.addColorStop(0.5,"#ff8794");
      gradient.addColorStop(1.0,"#ff3c5b");
      
        ctx.translate(cx-100,cy-100);
        ctx.fillStyle=gradient;

        var d = 150 + 5*Math.cos(2*delta)*i;
        var k = 50 + 2.5*Math.sin(2*delta)*i;

        ctx.translate(d-50,k-50);
        ctx.rotate(-0.25*i*Math.sin(2*delta)*Math.PI/n);
        ctx.translate(-d+50,-k+50);

        ctx.beginPath();
        ctx.moveTo(k, k + d / 4);
        ctx.quadraticCurveTo(k, k, k + d / 4, k);
        ctx.quadraticCurveTo(k + d / 2, k, k + d / 2, k + d / 4);
        ctx.quadraticCurveTo(k + d / 2, k, k + d * 3/4, k);
        ctx.quadraticCurveTo(k + d, k, k + d, k + d / 4);
        ctx.quadraticCurveTo(k + d, k + d / 2, k + d * 3/4, k + d * 3/4);
        ctx.lineTo(k + d / 2, k + d);
        ctx.lineTo(k + d / 4, k + d * 3/4);
        ctx.quadraticCurveTo(k, k + d / 2, k, k + d / 4);
        ctx.stroke();
        ctx.fill();

        ctx.translate(d-50,k-50);
        ctx.rotate(0.25*i*Math.sin(2*delta)*Math.PI/n);
        ctx.translate(-d+50,-k+50);
      
        ctx.translate(-cx+100,-cy+100);
    }

    window.requestAnimationFrame(draw);
}

window.onload=init;
