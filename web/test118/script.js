$(function(){
    $text=$("body").html()
    setInterval(function(){$("body").append("<span>.</span>")},600)
  setInterval(function(){    $("body").append("<span>.</span>")},800)
   setInterval(function(){   $("body").append("<span>.</span>")},1000)
  setInterval(function(){  $("body").html($text);},1200)
})