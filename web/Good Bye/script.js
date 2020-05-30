var spot = {
  x: - 30,
  y:-30
}

var col={
    r:0, 
    g:0,
    b:0
}
function setup() {
  createCanvas(360, 600);
  background(0);
  
  var x=new Date,
  y=x.getHours();if(y>=4&&y<12)var t="Good_Morning";else a=y>=12&&y<16?t="Good_Afternoon":y>=16&&y<19?t="Good_evening":y>=19&&y<=24||0<=y&&4>y?t="Good_Night":t="hi";
t="Good_Bye";
t+=" Sololearns";
t+=" Happy_Coding";
 
  l="";
  i=0;
setInterval(function(){if(i<t.length)
  {
      l="<span>"+t[i]+"</span>";
      $("#y").append(l);
      i++;
      if(i<5){$("div span:nth-child("+i+")").attr("class","anim");
      setTimeout(function(){$("div span:nth-child("+i+")").removeClass("anim");},500);
     
     }else{
         $("div span:nth-child("+i+")").attr("class","anim");
      setTimeout(function(){
      $("div span:nth-child("+i+")").removeClass("anim");},500);
      }}
     },700);
     
}
 var  t=0;
function draw() {
if(t<700){
  col.r = random(100, 255);
  col.g = 0;
  col.b = random(100, 225);
  noStroke();
  spot.x = random(0, width);
  spot.y = random(0, height);
  fill(col.r, col.g, col.b, 90);
  ellipse(spot.x,spot.y , 30, 30); 
 t++;
  }else{
      return false ;
  }
}

