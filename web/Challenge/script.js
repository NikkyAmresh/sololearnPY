$(function(){
var text =
"What is the output of this code?<br>var x = 8;<br>var y = 2;<br>x -= y;<br>y = x/y;<br>document.write(y);";
$("#qq").html(text);
$(".submit").click(function(){
 $(".ans").val()==3?($(".correct").show(),$(".qu").hide(),$(".submit").hide(),$(".ans").hide(),$(".correct").css("-webkit-animation"," ans 1s"),$(".s1").html("5 : 5")):($(".wrong").show(),$(".qu").hide(),$(".submit").hide(),$(".ans").hide(),$(".wrong").css("-webkit-animation"," ans 1s"));
})
$("form").submit(function(){
$(".submit").trigger("click");
return false;
});
setTimeout(function(){$(".tout").show(),$(".qu").hide(),$(".submit").hide(),$(".ans").hide(),$(".tout").css("-webkit-animation"," ans 1s")},29000);
})