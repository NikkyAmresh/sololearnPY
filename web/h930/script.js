// Created by James

// Created by James

// Created by James
alert("Please,Send me a link for a some cars")
alert("Write Your Score In Comments ")

var canvas, g;
var x, y, widht, height;
var moving, playing = true, paused = false;
var cars = [];
var explos = [];
var score = 0, time = 1, pos;
var car = new Image();
car.src = "http://worldartsme.com/images/car-from-above-clipart-1.jpg";
var car1 = new Image();
car1.src = "http://laoblogger.com/images/best-clipart-cars-7.jpg";
var car2 = new Image();
car2.src = "http://laoblogger.com/images/best-clipart-cars-7.jpg";
var images = [];
images.push(car);
images.push(car1);
var player = new Image();
player.src = "http://bbcpersian7.com/images/clipart-car-from-above-15.jpg";
var expl = new Image();
//Explosion
expl.src = " https://i.imgur.com/UgQdU9G.png";

alert("Welcome to my game!                              ©James")

onload = function() {
    canvas = document.getElementById("canvas");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    g = canvas.getContext("2d");
    
    width = canvas.width / 5 - 20;
    height = width * 1.3;
    
    x = canvas.width / 2 - width / 2;
    y = canvas.height - height * 1.1;
    
    pos = canvas.height / 10;
    
    canvas.onclick = function(event) {
        move(event);
    }
    for(var i = 0; i < 8; i++)
        addCar();
        
    setInterval(function() {
        for(var i in cars)
            cars[i].speed *= 1.02;
    }, 500);
    update();
}

function pause() {
    var pt = document.getElementById("pt");
    paused = !paused;
    if(!paused) {
        pt.style.display = "none";
        update();
    } else
        pt.style.display = "block";
}

function move(event) {
    if(paused)
        return;
    if(event.pageX < canvas.width / 2 && x - canvas.width / 5 >= 0 && !moving) {
        moving = true;
        var targetX = x - canvas.width / 5;
        var iv = setInterval(function() {
            x -= 3;
            if(x <= targetX) {
                x = targetX;
                moving = false;
                clearInterval(iv);
            }
        }, 0);
    }
    else if(event.pageX >= canvas.width / 2 && x + canvas.width / 5 <= canvas.width && !moving) {
        moving = true;
        var targetX = x + canvas.width / 5;
        var iv = setInterval(function() {
            x += 3;
            if(x >= targetX) {
                x = targetX;
                moving = false;
                clearInterval(iv);
            }
        }, 0);
    }
}

function addCar() {
    cars.push({
        x: Math.floor(Math.random() * 5) * canvas.width / 5 + 10,
        y: Math.random() * (-canvas.height / 2) -height,
        speed: Math.random() * 2 + 0.5,
        img: images[Math.floor(Math.random() * images.length)],
        update: function() { this.y += this.speed * time; for(var i in cars) {
        if(cars[i] == this)
            continue;
        if(this.x == cars[i].x) {
            if(this.y + height > cars[i].y && this.y + height < cars[i].y + height) {
            this.speed = cars[i].speed-0.1;
            var tempX = cars[i].x;
            var tempY = cars[i].y;
            explos.push(new Point(cars[i].x, cars[i].y));
            cars.splice(i, 1);
            addCar();
          }
        } 
      }}
    })
}

function Point(x, y) {
    return {
        x: x,
        y: y,
        time: 0
    }
}

function update() {
    score += 0.2;
    if(time < 3)
    time += 0.001;
    document.getElementById("score").innerHTML = "Score: " + parseInt(score);
    draw();
    
    for(var i in cars) {
        cars[i].update();
        if(cars[i] === undefined)
            continue;
        if(cars[i].y > canvas.height || cars[i].y < -canvas.height) {
            cars.splice(i, 1);
            addCar();
      }
      if(x + width > cars[i].x && x < cars[i].x + width) {
          if(cars[i].y + height > y && cars[i].y < y + height) {
              gameOver();
              break;
          }
      }
    }
    
    if(playing && !paused)
    requestAnimationFrame(update);
}

function gameOver() {
    playing = false;
    div = document.getElementById("div");
    div.style.display = "block";
    div.lastChild.innerHTML = "Score: " + parseInt(score);
}

function restart() {
    if(!playing) {
    playing = true;
    div = document.getElementById("div");
    div.style.display = "none";
    x = canvas.width / 2 - width / 2;
    y = canvas.height - height * 1.1;
    cars = [];
    score = 0;
    pos = canvas.height / 10;
    time = 1;
    
    for(var i = 0; i < 8; i++)
        addCar();
    
    update();
    }
}

function draw() {
    g.clearRect(0, 0, canvas.width, canvas.height);
    
    g.fillStyle = "#333339";
    g.fillRect(0, 0, canvas.width, canvas.height);
    
    g.strokeStyle = "#eee";
    g.lineWidth = 4;
    for(var i = 1; i < 5; i++) {
        for(var j = 0; j < 12; j++) {
        g.beginPath();
        g.moveTo(canvas.width / 5 * i, canvas.height / 20 * j + canvas.height / 20 * j - pos);
        g.lineTo(canvas.width / 5 * i, canvas.height / 20 * (j + 1) + canvas.height / 20 * j - pos);
        g.stroke();
        }
    }
    
    if(pos <= canvas.height / 10 / 10)
        pos = canvas.height / 10;
    else
        pos -= canvas.height / 10 / 10 * time;
    
     g.fillStyle = "yellow";

    for(var i in cars) 
        g.drawImage(cars[i].img, cars[i].x, cars[i].y, width, height);
        
    for(var i in explos) {
        if(explos[i].time > 20)
            explos.splice(i, 1);
        else {
            g.drawImage(expl, explos[i].x - (height - width) / 2, explos[i].y + time, height, height * 1.5);
        explos[i].time++;
        }
    }
    
    g.fillStyle = "red";
    g.drawImage(player, x, y, width, height);
}