// Modified by Nikky Amresh

// Created by ThreeG
var c=["b","w"];
var t0=["<","/",">","class="];
var t1=["table","tr","th","td"];
var cm=["&#9820;","&#9822;","&#9821;","&#9818;","&#9819;","&#9821;","&#9822;","&#9820;","&#9823;"];
var 
t3=[t0[0]+t1[0]+t0[2],t0[0]+t0[1]+t1[0]+t0[2],t0[0]+t1[1]+t0[2],t0[0]+t0[1]+t1[1]+t0[2],t0[0]+t1[3]+t0[2],t0[0]+t0[1]+t1[3]+t0[2],t0[0]+t1[2]+t0[2],t0[0]+t0[1]+t1[2]+t0[2]];
function js(a){
    document.write(a);
}
function count(){
               for(var n="abcdefgh",i=0;i<n.length;i++)js(t3[6]+n[i]+t3[7]);}
function main(a,b){
                 for(var j,i=0;i<8;i++)0==i||i%2==0?js(t0[0]+t1[3]+" "+t0[3]+a+t0[2]+cm[i]+t3[5]):js(t0[0]+t1[3]+" "+t0[3]+b+t0[2]+cm[i]+t3[5]);}
function pawn(a,b){
                    for(var i=0;i<8;i++)0==i||i%2==0?js(t0[0]+t1[3]+" "+t0[3]+a+t0[2]+cm[8]+t3[5]):js(t0[0]+t1[3]+" "+t0[3]+b+t0[2]+cm[8]+t3[5]);}
function blank(a,b){
                    for(var i=0;i<8;i++)0==i||i%2==0?js(t0[0]+t1[3]+" "+t0[3]+a+t0[2]+t3[5]):js(t0[0]+t1[3]+" "+t0[3]+b+t0[2]+t3[5]);}
function draw(){
    js(t3[0]+" "+t0[0]+t1[1]+" "+t0[3]+"'fp'"+t0[2]+t3[6]+" "+t3[7]);
    count();
    js(t3[6]+" "+t3[7]+" "+t3[3])  
  for(var i=8;i>0;i--){
  if(i<3)var m="white";js(t0[0]+t1[1]+" "+t0[3]+"'"+m+"'"+t0[2]+t3[6]+" "+i+t3[7]),8==i?main(c[0],c[1]):7==i||2==i?7==i?pawn(c[1],c[0]):pawn(c[0],c[1]):1==i?main(c[1],c[0]):i%2==0?blank(c[0],c[1]):blank(c[1],c[0]),js(t0[0]+t1[2]+" "+t0[3]+"'flip'"+t0[2]+i+t3[7]+" "+t3[3]);
     }   
    js(t3[2]+" "+t3[6]+" "+t3[7]);
    count();
    js(t3[1]);
    js(t0[0]+"br"+t0[2]+"Original Code "+t0[0]+"a href='https://code.sololearn.com/W3c9JWqNncfE'"+t0[2]+" here"+t0[0]+t0[1]+"a"+t0[2])
}
draw();
$(function(){$(t1[3]).css("filter","invert(100%)")});