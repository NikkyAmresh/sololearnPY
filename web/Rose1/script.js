var x=0;
var i=0;
var name="Nikky";
$(function(){
var n=$("font").length;
  setInterval(function(){if(i<n)
  {    if(x==name.length){
      x=0;
  }
   $("font:nth-child("+i+")").html(name[x]);
       x++;
       i++;
      }
     },1);
   
});


     