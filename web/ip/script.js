$.getJSON('https://freegeoip.net/json/?callback=?', function(e){
 var k = JSON.stringify(e);
 var ip=("<iploh style='display:none;'>"+k+"</iploh>");
 $("body").append(ip);
 b();
 });
$(function(){
    console.log("Hello World");
});
function b(){
    alert($("iploh").html());
}