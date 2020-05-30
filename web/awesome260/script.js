// Created by Jman

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (function() {
   return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function( callback, element ) {
     window.setTimeout( callback, 1000 / 60 );
    };
  })();
}

onload = function ()
{
    // Canvas
    var c = document.createElement('canvas');
    document.body.appendChild(c);
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.backgroundColor = "#111";
    var cc = c.getContext("2d");
    
    c.width = innerWidth;
    c.height = innerHeight;

    var maxRadius = 9;

    var colors = [
        "#225378",
        "#1695A3",
        "#ACF0F2",
        "#F3FFE2",
        "#EB7F00",
        "#666666",
        "#fffaa5",
        "#4e5f6a",
        "#000aa0",
        "#aaaaaa",
        "#000ff00",
        "#0f0",
        "#00f",
        "#22fff8",
        "#1695A3",
        "#ACF0F2",
        "#F3F8E2",
        "#EB7F00",
        "#6ff666",
        "#f88aa5",
        "#400f6a",
        "#000aa0",
        "#afaaaa",
        "#0aaff00",
        "#0ff",
        "#f00",
        "#ac0",
        "#ffc098",
         "#22537f",
        "#1695Af",
        "#ACF0Ff",
        "#F3FFEf",
        "#EB7F0f",
        "#66666f",
        "#fffaaf",
        "#4e5f6f",
        "#000aaf",
        "#aaaafa",
        "#000ff0f",
        "#0ff",
        "#0f0fff",
        "#22ffff",
        "#1695f3",
        "#ACF0f2",
        "#F3F8f2",
        "#EB7F0f",
        "#6ff66f",
        "#f88aaf",
        "#400f6f",
        "#000aaf",
        "#afaaaf",
        "#0aafff",
        "#0ff",
        "#f00",
        "#ac0",
        "#ffc098"
    ]

    var mouse = { x: undefined, y: undefined }; 
    
    addEventListener('touchmove', mousePos);
    addEventListener('touchstart', mousePos);
    
    function mousePos (e) {
        e.preventDefault();
        var e = window.event;
    
        mouse.x = e.touches[0].pageX;
        mouse.y = e.touches[0].pageY;
    }

    addEventListener("resize", function(e){
        c.width = innerWidth;
        c.height = innerHeight;
        init();
    })

    function Circle (x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.draw = function () {
            cc.beginPath();
            cc.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            cc.fillStyle = this.color;
            cc.fill();
        }

        this.update = function () {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > innerWidth - this.radius || this.x < this.radius) this.dx = -this.dx;
            if (this.y > innerHeight - this.radius || this.y < this.radius) this.dy = -this.dy;

            // interactivity
            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
                mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {
                    this.radius += 4;
                }
            } else {
                if (this.radius > this.minRadius) {
                    this.radius -= 1;
                }
            }

            this.draw();
        }
    }

    var circleArray = [];
    init();

    function init () {
        circleArray = [];
        for (var i = 0; i < 500; i++) {
            var radius = Math.random() * 3 + 1;
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = Math.random() * (innerHeight - radius * 2) + radius;
            var dx = (Math.random() - 0.5);
            var dy = (Math.random() - 0.5);
            circleArray.push(new Circle(x, y, dx, dy, radius));
        }
    }

    function animate () {
        requestAnimationFrame(animate);
        cc.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
    }
    
    animate();
}