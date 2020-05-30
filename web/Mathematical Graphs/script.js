var z=20;
function c(){
  var canvas = $("canvas")[0];
  ctx=canvas.getContext("2d"); 
  ctx.canvas.width = window.innerWidth;
  }
var r=["x+8","Math.sin(x)","Math.pow(x,2)","Math.pow(x,3)","Math.tan(x)","Math.log(x)","Math.cos(x)","Math.pow(x,1/2)","-x"];
function draw(fun1,c){
  var canvas = $("canvas")[0];
  var axes={},
  ctx=canvas.getContext("2d"); 
  ctx.canvas.width = window.innerWidth;
  axes.x0 = 1/2+ canvas.width/2;
  axes.y0 = 1/2 + canvas.height/2;
  axes.n  = true; 
  xy(ctx,axes); 
  graph(ctx,axes,fun1,c);
}
function random(){
   var k=Math.floor(Math.random()*r.length);
   $("#input").val(r[k]);
   $("#cl").click();
}
 function graph(ctx,axes,eqq,c) {
   var xx, yy,x0=axes.x0, y0=axes.y0;
   var l = Math.round((ctx.canvas.width-x0)); 
   var s= axes.n?Math.round(-x0): 0;
   ctx.beginPath();
   ctx.lineWidth = 1; 
   ctx.strokeStyle = "#4AC75F";
    for (var i=s;i<=l;i++) { 
    xx=i;
    yy = c*eqq(xx/c)
    if (i==s){
      ctx.moveTo(x0+xx,y0-yy);
        }
    else{
     ctx.lineTo(x0+i,y0-yy);
     }
    } 
    ctx.stroke();
     }
function eq(x){
    $("#equation").html(x+"=y");
    $("#equation").show()
}
function xy(ctx,axes) { 
     var x0=axes.x0, w=ctx.canvas.width; 
     var y0=axes.y0, h=ctx.canvas.height; 
     var xmin = axes.n ? 0 : x0;
      ctx.beginPath(); 
      ctx.strokeStyle = "#000";
      ctx.moveTo(xmin,y0);
      ctx.lineTo(w,y0); 
      ctx.moveTo(x0,0);
      ctx.lineTo(x0,h);
      ctx.stroke();
     }
function gr(z){
       var canvas = $('#canvas')[0];
       eval("function fun1(x) {return "+$("#input").val()+";}");
       try{draw(fun1,z);}catch(err){alert(err.message)}
       eq($("#input").val());}
$(function(){
    $("#cl").click(function(){
    z=20;
    gr(z);
    });
    $("#rand").click(function(){
    random();
    });
    $("#zo").click(function(){
    z=z+10;
    gr(z);
    })
    $("#zi").click(function(){
    z=z-10;
    gr(z);
    });
});
window.onload=c;
alert("Zoom buttons are experimental");