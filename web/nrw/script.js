$(function(){
function uv(a){try{navigator.vibrate(a)}catch(biu){}}

$("#s1").click(function(){
 $(".left").removeClass("-webkit-animation");
if($("#ans1").val()==3){
$(".correct").show();
$(".qq1").hide();
$(".submit").hide();
$(".ans").hide(50);
$(".correct").css("-webkit-animation"," ans 1s");
$(".s1").html("5 : 5");
$(".qc").hide();
$(".ans").css("color","#7DB343")
}
else{
$(".wrong").show();
$("#qq1").hide();
$("#s1").hide();
$("#ans1").hide(50);
$(".wrong").css("-webkit-animation"," ans 1s"),uv(50);
$(".qc").hide(),$(".ans").css("color","#f00")
}
 setTimeout(function(){
    $(".level11").hide();
    $(".level22").show();
    $("#qq1").hide();
    $(".level22").css("-webkit-animation"," ans 1s");},1000);
    setTimeout(function(){
    $("#qq2").show();
    $("#q2").css("-webkit-animation"," ques 1s");
    $("#ans2").css("-webkit-animation"," anss 1s");
    $("#qc2").show();
    $("#qc2").css("-webkit-animation"," qc 1s");
    $(".left").css("-webkit-animation"," time 30s")
},2000);
});

$("#s2").click(function(){
 $(".left").removeClass("-webkit-animation");
if($("#ans2").val()==3){
$(".c2").show();
$(".qu").hide();
$(".submit").hide();
$(".ans").hide(50);
$(".c2").css("-webkit-animation"," ans 1s");
$(".s1").html("5 : 5");
$(".qc").hide();
$(".ans").css("color","#7DB343")
}
else{
$(".w2").show();
$("#qq2").hide();
$("#s2").hide();
$("#ans2").hide(50);
$(".w2").css("-webkit-animation"," ans 1s"),uv(50);
$(".qc").hide(),$(".ans").css("color","#f00")
}
 setTimeout(function(){
    $(".level22").hide();
    $(".level33").show();
    $("#qq2").hide();
    $(".level33").css("-webkit-animation"," ans 1s");},1000);
    setTimeout(function(){
    $("#qq3").show();
    $("#q3").css("-webkit-animation"," ques 1s");
    $("#ans3").css("-webkit-animation"," anss 1s");
    $("#qc3").show();
    $("#qc3").css("-webkit-animation"," qc 1s");
    $(".left").css("-webkit-animation"," time 30s")
},2000);
});


$("#s3").click(function(){
 $(".left").removeClass("-webkit-animation");
if($("#ans3").val()==3){
$(".c3").show();
$(".qu").hide();
$(".submit").hide();
$(".ans").hide(50);
$(".c3").css("-webkit-animation"," ans 1s");
$(".s1").html("5 : 5");
$(".qc").hide();
$(".ans").css("color","#7DB343")
}
else{
$(".w3").show();
$("#qq3").hide();
$("#s3").hide();
$("#ans3").hide(50);
$(".w3").css("-webkit-animation"," ans 1s"),uv(50);
$(".qc").hide(),$(".ans").css("color","#f00")
}
 setTimeout(function(){
    $(".level33").hide();
    $(".level44").show();
    $("#qq3").hide();
    $(".level44").css("-webkit-animation"," ans 1s");},1000);
    setTimeout(function(){
    $("#qq4").show();
    $("#q4").css("-webkit-animation"," ques 1s");
    $("#ans4").css("-webkit-animation"," anss 1s");
    $("#qc4").show();
    $("#qc4").css("-webkit-animation"," qc 1s");
    $(".left").css("-webkit-animation"," time 30s")
},2000);
});

$("#s4").click(function(){
 $(".left").removeClass("-webkit-animation");
if($("#ans4").val()==3){
$(".c4").show();
$(".qu").hide();
$(".submit").hide();
$(".ans").hide(50);
$(".c4").css("-webkit-animation"," ans 1s");
$(".s1").html("5 : 5");
$(".qc").hide();
$(".ans").css("color","#7DB343")
}
else{
$(".w4").show();
$("#qq4").hide();
$("#s4").hide();
$("#ans4").hide(50);
$(".w4").css("-webkit-animation"," ans 1s"),uv(50);
$(".qc").hide(),$(".ans").css("color","#f00")
}
 setTimeout(function(){
    $(".level44").hide();
    $(".level55").show();
    $("#qq4").hide();
    $(".level55").css("-webkit-animation"," ans 1s");},1000);
    setTimeout(function(){
    $("#qq5").show();
    $("#q5").css("-webkit-animation"," ques 1s");
    $("#ans5").css("-webkit-animation"," anss 1s");
    $("#qc5").show();
    $("#qc5").css("-webkit-animation"," qc 1s");
    $(".left").css("-webkit-animation"," time 30s")
},2000);
});


$("#s5").click(function(){
 $(".left").removeClass("-webkit-animation");
if($("#ans5").val()==3){
$(".c5").show();
$(".qu").hide();
$(".submit").hide();
$(".ans").hide(50);
$(".c5").css("-webkit-animation"," ans 1s");
$(".s1").html("5 : 5");
$(".qc").hide();
$(".ans").css("color","#7DB343")
}
else{
$(".w5").show();
$("#qq5").hide();
$("#s5").hide();
$("#ans5").hide(50);
$(".w5").css("-webkit-animation"," ans 1s"),uv(50);
$(".qc").hide(),$(".ans").css("color","#f00")
}
 setTimeout(function(){
    $(".level55").hide();
    $(".level55").show();
    $("#qq3").hide();
    $(".level44").css("-webkit-animation"," ans 1s");},1000);
    setTimeout(function(){
    result()},2000);
});

function result(){
    alert("Coming Soon");
};


/*
setTimeout(function(){$(".tout").show(),$(".qu").hide(),$(".submit").hide(),$(".ans").hide(50),$(".tout").css("-webkit-animation"," ans 1s"),uv(50),$(".qc").hide(),$(".ans").css("color","#f00")},29000);*/

$(".accept").click(function(){
    setTimeout(function(){$(".challenge").hide(),
    $(".p1i").hide();
    $(".level11").show();
    $(".level11").css("-webkit-animation"," ans 1s");
    $(".p2i").hide();
    },1000);
    setTimeout(function(){
    $("#qq1").show();
    $("#q1").css("-webkit-animation"," ques 1s");
    $("#ans1").css("-webkit-animation"," anss 1s");
    $("#qc1").show();
    $("#qc1").css("-webkit-animation"," qc 1s");
    $(".left").css("-webkit-animation"," time 30s")
},2000);
    $(".l1").hide();
    $(".l2").hide();
    $("#l1").css("-webkit-animation"," ans 1s");
    $(".pname").hide();
    $(".vs").hide();
    $(".lang").hide();
    $(".decline").hide();
    $(".accept").hide();
    $(".p1i").css("-webkit-animation"," go1 1s");
    $(".p2i").css("-webkit-animation"," go2 1s");
});
$(".decline").click(function(){
    $("body").hide();
})
})
alert ("Not yet completed");
