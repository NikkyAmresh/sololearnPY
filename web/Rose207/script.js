var i=0;
var name=modify("_THANKS FOR 5000");
var x=0;
function modify(e){
   return e.replace(/ /g, '_');
} 
$(function(){
  n=color.length;
  
  setInterval(function(){if(i<n)
  {    if(x==name.length){
       x=0;
  }
   var tk="<font style='background-color:#000;color:#"+color[i]+"'>"+name[x]+"</font>";
   if(i%60==0){
       tk=tk+" ";
   }else{tk=tk}
   $("body").append(tk);
   if(i==n-1){
     alert("Thanks for your support");
     alert("😊");
   }
       x++;
       i++;
    } },1);
   
});
