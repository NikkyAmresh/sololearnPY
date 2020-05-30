$(function() {
    var t = setTimeout(function(){
     $("#bt").hide();},2000);
 $("#bt").click(function(){ 
 clearTimeout(t); 
  });
});