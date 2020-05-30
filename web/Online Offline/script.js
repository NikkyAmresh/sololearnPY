setInterval(function(){
var online = navigator.onLine;    
$("body").html(online?"You are online":"You are offline");},20);