// Created by Martin

Array.prototype.insert = function ( index, item ) { this.splice( index, 0, item ); }
var snake = [0]
                    
                    
                    
  // Change blocks for the amount of blocks per row \\
                       blocks = 15;                
//====================================================\\
                    
/*
alert("Click on the play button to start a game of snake");
alert("Change your direction with the arrow buttons");
alert("You can change the fps with the buttons left and right to the contollers (More fps -> higher speed -> more points)");*/

var w;
screen2();

function screen2() {
    if(window.innerHeight < window.innerWidth) {
        w = window.innerHeight*.885;}
    else {w = window.innerWidth*.75;}
}
            
var h = w;
var size = Math.floor(w/blocks);
var ID;
var fps = 3;
var speed = 1000/fps;
var dir;
var dirs = [];
var score = 0;
var games = 0;
var inGame = false;
var paused;
var colors;

var colors1 = ["rgba(30,45,30,0.5)","rgba(0,255,0,1)",
               "rgba(255,0,0,1)","rgba(255,255,0,1)"];

var colors2 = ["rgba(30,45,30,0.5)","rgba(0,255,0,1)",
               "rgba(255,255,255,1)","rgba(255,255,0,1)"];
          
var colors3 = ["rgba(30,45,30,0.5)","green",
               "purple","yellow"];

colors = colors1;

var sc = colors[0]; var sbc = colors[1];
var shc = colors[0]; var shbc = colors[2];
var fc = colors[0]; var fbc = colors[3];

var xr;
var yr;
var food = [];

var starts = 0;
var totalFood = 0;
var FoodInSnake = false; // False
var foodEaten;

var text;

                    
function start() {
    if(games!=0) {clearInterval(ID);}
        dir = "right";
        moves = 0;
        totalFood = 0;
        snake = [];
        spawnSnake();
        spawnFood();
        ID = setInterval(function() {move();},1000/fps);
        games++;
        inGame = true;
}
                    
                    
function speedUp() {
    fps+=.5;
        if(inGame) {
            clearInterval(ID);
            ID = setInterval(function() {move();},1000/fps);
        }
        document.getElementById("sp").innerHTML = fps;
}

function speedDown() {
    fps-=.5;
        if(inGame) {
            clearInterval(ID);
            ID = setInterval(function() {move();},1000/fps);
        }
        document.getElementById("sp").innerHTML = fps;
}


function drawRect(x,y,width,height,border,color,bordercolor) {
    ctx.fillStyle = bordercolor;
    ctx.fillRect(x,y,width,height);
    ctx.fillStyle = color;
    ctx.fillRect(x+border/2,y+border/2,width-border,height-border);
}
                    
                    
function spawnSnake() {
    snake[0] = [size,0];
    snake[1] = [0,0];
    snake[2] = [0-size,0];
}
                    
                    
function spawnFood() {
    do {
        FoodInSnake = false;
        xr = size*Math.floor((Math.random()*(blocks-1))+1);
        yr = size*Math.floor((Math.random()*(blocks-1))+1);
        food = [xr, yr];
        drawRect(xr,yr,size,size,size/5,fc,fbc); // FOOD
        for(i=1;i<snake.length;i++) {
            if(xr == snake[i][0] && yr == snake[i][1]) {
                FoodInSnake=true;
            }
        }
    }
    while(FoodInSnake);
}
// © ∆•Martin•∆
                    
function crash() {
    for(i=1;i<snake.length;i++) {
        if(snake[0][0] === snake[i][0] && snake[0][1] === snake[i][1]) {
            return true;
        }
    }
    x = snake[0][0]; y = snake[0][1];
    if(x<0 || x>w-size || y<0 || y>w-size) {
        return true;
    }
    return false;
}
                    
function endGame() {
    clearInterval(ID);
    inGame = false;
    alert("You crashed!\nYour score is "+String(score));
    snake = []; score = 0;
    c.width = c.width;
    toggleText();
    paused = false;
}
                    
                    
function blit() {
    drawRect(xr,yr,size,size,size/5,fc,fbc); // FOOD
    drawRect(snake[0][0],snake[0][1],size,size,size/5,shc,shbc);
    for(i=1;i<snake.length;i++) { //∆•Martin•∆
        drawRect(snake[i][0],snake[i][1],size,size,size/5,sc,sbc);
    }
    dirs.push(dir);
    if(dirs.length == 3) {dirs.splice(0,1)}
}



var dl; // 180° crash handling wip
function dire(x) {
    dl = dirs.length;
    if(dirs[dl-1] != 'right' && x == 'left') {dir = x;}
    if(dirs[dl-1] != 'left' && x == 'right') {dir = x;}
    if(dirs[dl-1] != 'up' && x == 'down') {dir = x;}
    if(dirs[dl-1] != 'down' && x == 'up') {dir = x;}
}
                    
function move() {
    dl = dirs.length;
    if(dir == "right") {
        c.width = c.width;
        snake.insert(0,[snake[0][0]+size,snake[0][1]]);
    }
    else if(dir == "left") {
        c.width = c.width;
        snake.insert(0,[snake[0][0]-size,snake[0][1]]);
    }
    else if(dir == "up") {
        c.width = c.width;
        snake.insert(0,[snake[0][0],snake[0][1]-size]);
    }
    else if(dir == "down") {
        c.width = c.width;
        snake.insert(0,[snake[0][0],snake[0][1]+size]);
    }
    if(!foodEaten) {
        snake.splice(snake.length-1);}
    else {
        totalFood += 1;
        score += 2*fps;//©
        spawnFood();
    }
    draw();
    document.getElementById("s").innerHTML = score;
    if(crash()) {endGame();}
}

                    
function draw() {
    blit();
    x1 = snake[0][0];
    y1 = snake[0][1];
    foodEaten = xr==x1 && yr == y1;
}

                    
function pause() {
    if(games == 0) {start();}
    else if(inGame) {
        clearInterval(ID);
        paused = true;
        inGame = false;
    }
    else if(paused) {
        ID = setInterval(function() {move();},1000/fps);
        paused = false;
        inGame = true;
    }
    else {
        start();
        inGame = true;
        paused = false;
    }
}
                    
function toggleText() {
    text = document.getElementById("pause").firstChild;
    text.data = text.data == "\u25B6" ? "\u23F8" : "\u25B6";
}
                    
                    
spawnSnake();