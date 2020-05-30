function aisha(r){
         var div = document.getElementById('res'); 
         $("#res").append("<div class='msg sent'>"+r+"</div>");
         $("#res").append("<div class='msg res'>°°°</div>");
        var c;
        var t=new XMLHttpRequest;
        t.onreadystatechange=function(){
        if(t.readyState==XMLHttpRequest.DONE&&200==t.status){
        c=jQuery.parseJSON(t.responseText).result;
       res.removeChild(res.lastChild);
       $("#res").append("  <div class='msg res'>"+c+"</div>");
       var scroll=($(".conversation-container").scrollTop())+1550;
       $(".conversation-container").scrollTop(scroll);
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