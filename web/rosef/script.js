var c=["#000"];
var t0=["<","/",">","class="];
var t1=["font","color"];
var color=["#e9e9e9","#dcd8d7","#e4e2e3","#99081f","#cfcdce"]
var i=0;
var cm;
var name=modify(prompt("Enter Your text","_Love_You_Mom")||"_Love_You_Mom");
var x=0;
function modify(e){
   return e.replace(/ /g, '');
}
$(function(){
  for(var i=0;i<60;i++){
      $("body").prepend("<font color='#e9e9e9'>i</font>");
      if(i==59){
      var n=$("font").length;
          write(n);
      }
  }
function write(n){
  setInterval(function(){if(i<n)
  {    if(x==name.length){
       x=0;
      
  }
   $("font:nth-child("+i+")").html(name[x]);
       x++;
       i++;
      }
     },1);}
   
});