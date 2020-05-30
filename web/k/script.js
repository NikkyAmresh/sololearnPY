// Created by QuentinJanuel

$(function(){
var FPS = 60;
var TIME = 0;
var canvas = $('<canvas>');
var W = 600;
var H = 150;
canvas.attr({
    'width':W,
    'height':H
});
canvas.css({
    'width':W/2,
    'height':H/2
});
$('body').append(canvas);
var c = canvas[0].getContext('2d');
var dirPath = 'https://raw.githubusercontent.com/QuentinJanuel/trex-images/master/';
var newImage = function(source){
    var image = new Image();
    image.src = dirPath+source;
    return image;
}
var newSound = function(source){
    var sound = new Audio();
    sound.src = dirPath+source;
    return sound;
}
var speed = 0;
var acc = 0.002;
var start = false;
var camX = 0;
var ground = newImage('ground.png');
var trex = {
    x:20,
    y:96,
    yMax:96,
    imgIndex:0,
    vspd:0,
    isCrouching:false,
    dead:false,
    idle:newImage('trexIdle.png'),
    run:[
        newImage('trexRun0.png'),
        newImage('trexRun1.png')
    ],
    crouch:[
        newImage('trexCrouch0.png'),
        newImage('trexCrouch1.png')
    ],
    imgDead:newImage('trexDead.png')
};
trex.img = trex.idle;
var cactus = [];
var newCactus = function(){
    var imgCactus = [];
    for(var i = 0; i < 4; i++){
        imgCactus.push(newImage('cactus'+i+'.png'));
    }
    var ranIndex = Math.floor(imgCactus.length*Math.random());
    cactus.push({x:W,y:96+(ranIndex != 1)*10,img:imgCactus[ranIndex]});
}
var sndJump = newSound('jump.mp3');
var keys = {up:false,down:false};
var click = false;
$('body').keyup(function(e){
    switch(e.which){
        case 38:
            keys.up = false;
            break;
        case 40:
            keys.down = false;
            break;
    }
});
$('body').keydown(function(e){
    switch(e.which){
        case 38:
            keys.up = true;
            break;
        case 40:
            keys.down = true;
            break;
    }
});
$('body').click(function(){
    click = true;
    if(!trex.dead && trex.y == trex.yMax){
        sndJump.play();
    }
});
setInterval(function(){
    c.clearRect(0,0,W,H);
    if(TIME%100 == 50){
        newCactus();
    }
    for(var i = 0; i < 3; i++){
        var x = camX+i*ground.width;
        while(x < -ground.width){
            x += 3*ground.width;
        }
        c.drawImage(ground,x,H-ground.height);
    }
    with(trex){
        img = idle;
        if(!dead){
            vspd += 0.5;
            y += vspd;
            var imgId = Math.floor((imgIndex++)/8)%2;
            isCrouching = false;
            if(y >= yMax){
                y = yMax;
                vspd = 0;
                img = run[imgId];
                if(keys.down && start){
                    isCrouching = true;
                    img = crouch[imgId];
                }
                if(speed == 0){
                    img = idle;
                    if(start){
                        speed = 5;
                    }
                }
            }
            if((keys.up || click) && y == yMax){
                vspd = -10;
                sndJump.play();
                start = true;
            }
        }else{
            speed = 0;
            img = imgDead;
        }
        c.drawImage(img,x,y+isCrouching*17);
    }
    for(var i in cactus){
        with(cactus[i]){
            x -= speed;
            c.drawImage(img,x,y);
            if(x+img.width > trex.x && x < trex.x+trex.img.width && y+img.height > trex.y && y < trex.y+trex.img.height){
                trex.dead = true;
            }
        }
    }
    camX -= speed;
    if(speed != 0){
        speed += acc;
    }
    if(click){
        click = false;
    }
    TIME++;
},1000/FPS);
});