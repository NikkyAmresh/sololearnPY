// Created by @n0nym0u§

//var inp1 = prompt();
//var inp2 = prompt();
function rand(min,max){
    var d = new Date();
var milliseconds = d.getMilliseconds();
var rand = milliseconds/1000 ;

document.write(Math.floor(rand*5))
var c = new Date();
var m = c.getMilliseconds();
var r = m/1000 ;
document.write(Math.floor(r*5))
}
rand();
