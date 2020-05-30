// Created by QuentinJanuel

window.onload = function(){
var WIDTH = 300;
var HEIGHT = 300;
var FPS = 60;
var vs = 1.5;
var input = document.getElementsByTagName('input')[0];
var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
function update(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    n = Math.floor(input.value);
    document.getElementsByTagName('p')[0].innerHTML = n;
    if(n < 0){
        n = 0;
    }
    if(n > 25){
        n = 25;
    }
    sphere();
}
setInterval(update,1000/FPS);
function cos(val){
    return Math.cos(val);
}
function sin(val){
    return Math.sin(val);
}
function degtorad(val){
    return val*Math.PI/180;
}
function radtodeg(val){
    return val*180/Math.PI;
}
function abs(val){
    return sqrt(sqr(val));
}
function sqrt(val){
    return Math.sqrt(val);
}
function sqr(val){
    return val*val;
}
function pointDistance(x1,y1,x2,y2){
    return sqrt(sqr(x1-x2)+sqr(y1-y2));
}
function pointDirection(x1,y1,x2,y2){
    return radtodeg(Math.atan2(y1-y2,x2-x1));
}
var x = WIDTH/2;
var y = HEIGHT/2;
var z = 0;
var maxradius = (WIDTH/2)*5/6;
var incl_x = Math.random()*180;
var incl_y = Math.random()*180;
var incl_z = 0;
var n = 15;
var minsize = 2;
var maxsize = 5;
var g_angle = 0;
var img = new Image();
img.src = 'https://www.spriters-resource.com/resources/sheets/49/51907.png';
function square(cor_x,cor_y,cor_z){
    var square_size = minsize+(cor_z+maxradius)*(maxsize-minsize)/maxradius;
    var current_distance = pointDistance(x,y,cor_x,cor_y);
    var current_angle = pointDirection(x,y,cor_x,cor_y);
    var cur_x = x+current_distance*cos(degtorad(current_angle+g_angle));
    var cur_y = y-current_distance*sin(degtorad(current_angle+g_angle));
    var lx1 = 75;
    var ly1 = 225;
    var lx2 = 105;
    var ly2 = 255;
    var iscale = 2.3*WIDTH/360;
    var iwidth = square_size*iscale/2;
    ctx.drawImage(img,lx1,ly1,lx2-lx1,ly2-ly1,cur_x-iwidth,cur_y-iwidth,iwidth,iwidth);
}
function makeCircle(radius,hauteur,cor_x,cor_y,cor_z){
    for(i = incl_y; i < 360+incl_y; i += 360/n){
        var xxx = cor_x+radius*cos(degtorad(i))*sin(degtorad(-incl_z))+radius*cos(degtorad(i))*sin(degtorad(incl_z-90))
        var yyy = cor_y-radius*sin(degtorad(-incl_x))*sin(degtorad(i))-radius*cos(degtorad(i))*cos(degtorad(incl_z-90))
        var zzz = cor_z-radius*sin(degtorad(i))*cos(degtorad(incl_x))+sin(degtorad(-incl_x))*hauteur;
        square(xxx,yyy,zzz);
    }
}
function sphere(){
    for(angle_yy = -180; angle_yy < 180; angle_yy += 360/n){
        var hauteur = sin(degtorad(angle_yy))*maxradius;
        var yy = y-sin(degtorad(angle_yy))*maxradius*cos(degtorad(incl_x));
        var rad = maxradius*cos(degtorad(angle_yy));
        makeCircle(rad,hauteur,x+hauteur*sin(degtorad(incl_z)),y+(yy-y)*cos(degtorad(incl_z)),z);
    }
    incl_x += 0.25*vs;
    incl_y += 0.3*vs;
    incl_z += 0;
    g_angle += 0.5*vs;
}
}