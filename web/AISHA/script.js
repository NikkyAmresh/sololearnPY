function aisha(r){
         var div = document.getElementById('res'); 
        var el = div.getElementsByTagName('div');
         $("#res").prepend("<div class='msg sent'>"+r+"</div>");
         $("#res").prepend("<div class='msg res'>°°°</div>");
        var c;
        var t=new XMLHttpRequest;
        t.onreadystatechange=function(){
        if(t.readyState==XMLHttpRequest.DONE&&200==t.status){
        c=jQuery.parseJSON(t.responseText).result;
        div.removeChild(el[0]);
       $("#res").prepend("  <div class='msg res'>"+c+"</div>");
        }};
        var n="https://cors-anywhere.herokuapp.com/http://aishapy.herokuapp.com/bot?a="+r;
        t.open("GET",n,!0),
        t.send(null)
}
$(function(){
   var img=$("#p1");
 img.on('load', function(e){  $("#loader").hide();  $("#p1").hide();
  }).on('error', function(e) {
 $("#loader").show();
  });
})