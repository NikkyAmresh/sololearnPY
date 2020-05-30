// Created by Coder

var matrix = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
[0,0,1,2,2,2,1,0,1,2,2,2,1,0,0],
[0,1,2,2,2,2,2,1,2,2,2,2,2,1,0],
[0,1,2,2,2,2,2,2,2,2,2,2,2,1,0],
[0,1,2,2,2,2,2,2,2,2,2,2,2,1,0],
[0,1,2,2,2,2,2,2,2,2,2,2,2,1,0],
[0,0,1,2,2,2,2,2,2,2,2,2,1,0,0],
[0,0,0,1,2,2,2,2,2,2,2,1,0,0,0],
[0,0,0,0,1,2,2,2,2,2,1,0,0,0,0],
[0,0,0,0,0,1,2,2,2,1,0,0,0,0,0],
[0,0,0,0,0,0,1,2,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]
var w = 0;
console.log = function(){}
console.error = function(){}
console.warn = function(){}
var letter ;
var input,div,button;
var audio = new Audio("http://soundbible.com/grab.php?id=1739&type=mp3");
audio.loop = true;
var grid ;
var _show = false;
var border = [];
function setup(){
createCanvas(windowWidth,windowHeight).position(0,0);
background(0); 
//scale(0.4); 
 for(var i = 0;i<width;i+=20) {
 for(var j = 0;j<height;j+=20) {
     border.push(new Border(i+0,0));
     border.push(new Border(width,j+0));
     border.push(new Border(0,j+0));
     border.push(new Border(i+0,height));
 }
 }
 div= createP("").id("d");
 div.position(0,height/2-150);
 input = createInput("Dear Sololearn").id("value");
 input.parent(div);
 
 button = createButton("Submit").id("b1");
 button.mouseClicked(submit);
 button.parent(div);
 
 //stroke(255)
}
function draw(){
   background(0);
  // push();
     if(_show){
   for(var i = 0;i<matrix.length;i++){
   for(var j = 0;j<matrix[i].length;j++){
     if(matrix[i][j]!==0) {
        fill(255,0,0);
        textSize(5);
        noStroke()
        textAlign(CENTER); text(letter.charCodeAt(i),j*(grid/2+w)+width/2-grid*3.5,i*(grid/2+w)+height/2-grid*4);
     }  
   }
   }
 
     for(var b of border){
         b.show();
     }
     fill(0,255,0);
     textAlign(CENTER);
     textSize(30)
     text("Happy Valentine Day",width/2,height-50);
     fill(0,0,255);
     text(letter,width/2,height-100);
     
  //pop();
  w+=1;
  if(w>=2){
      w = 0;
  }
  }
  }
function Border(x,y){
    this.x = x;
    this.y = y;
    this.r = 20;
    this.col = color(random(255),random(255),random(255));
    this.show = function(){
    fill(this.col);
ellipse(this.x,this.y,this.r);
    }
}
function submit(){
letter =input.value();
if(letter.length>=3 && letter.length<=15){
    div.hide();
    input.hide();
    button.hide();
    _show = true;
    audio.play();
 grid =  letter.length*3;
 
 }
 else{
     alert("please enter a name between 3-15");
 }
}
