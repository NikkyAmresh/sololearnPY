$(function(){
function check(url){
function read(e){
    var ic,au;
    var r=(new DOMParser).parseFromString(e,"text/html").querySelector("html");
    var metas = r.getElementsByTagName('meta'); 
for (var i=0; i<metas.length; i++) { 
if (metas[i].getAttribute("property") == "og:image") { $("#img").attr("src",metas[i].getAttribute("content"));$(".container").css("height",580) ;}
if (metas[i].getAttribute("property") == "og:title") { $("#title").html(metas[i].getAttribute("content"));}
if (metas[i].getAttribute("property") == "og:video") { $("#dnld").attr("href",metas[i].getAttribute("content")); $("#dnld").html("DOWNLOAD"); $("#check").html("Check for download"); $("#check").removeAttr("disabled");break;} }return "";
   }     var t=new XMLHttpRequest;
        t.onreadystatechange=function(){ if(t.readyState==XMLHttpRequest.DONE&&200==t.status){var n=read(t.responseText);}else{
        if(t.readyState==XMLHttpRequest.DONE){
        $("#dnld").html("INVALID URL")
        $("#dnld").removeAttr("href")
        $("#title").html("")
        $("#img").removeAttr("src")
        $("#check").html("Check for download"); $("#check").removeAttr("disabled");}
}};
         var n="https://cors-anywhere.herokuapp.com/"+url;
        t.open("GET",n,!0),
        t.send(null)
        }
        $("#check").click(function(){
          if($("#url").val().trim()!=""){
            $("#check").attr("disabled",true);
            $("#check").html("Processing...");
            check($("#url").val());}else{
                $("#url").focus();
            }
        })
  })