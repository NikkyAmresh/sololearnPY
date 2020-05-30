$(function(){
function uv(a){try{navigator.vibrate(a)}catch(biu){}}
var x=0;
$("#s1").click(function(){
    $(".lf1").css("-webkit-animation"," time 30s"); $(".left").removeClass("-webkit-animation");
if($("#ans1").val()==3){
x++;
$("#qq1").hide();
$("#s1").hide();
$("#ans1").hide(50);
$(".correct").show();
$(".correct").css("-webkit-animation"," ans 1s");
$(".s1").html(x+" : 1");
$(".qc").hide();
$(".ans").css("color","#7DB343")
}
else{
$(".wrong").show();
$("#qq1").hide();
$("#s1").hide();
$(".s1").html(x+" : 1");
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
    $(".lf2").css("-webkit-animation"," time 30s"); $(".left").removeClass("-webkit-animation");
if($("#ans2").val()==9){
x++;
$(".c2").show();
$("#qq2").hide();
$("#s2").hide();
$(".s1").html(x+" : 2");
$("#ans2").hide(50);
$(".c2").css("-webkit-animation"," ans 1s");
$(".qc").hide();
$(".ans").css("color","#7DB343")
}
else{
$(".w2").show();
$("#qq2").hide();
$("#s2").hide();
$("#ans2").hide(50);
$(".s1").html(x+" : 2");
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
    $(".lf3").css("-webkit-animation"," time 30s");
 $(".left").removeClass("-webkit-animation");
if($("#ans3").val()==12){
x++;
$(".c3").show();
$("#qq3").hide();
$("#s3").hide();
$("#ans3").hide(50);
$(".c3").css("-webkit-animation"," ans 1s");
$(".s1").html(x+" : 3");
$(".qc").hide();
$(".ans").css("color","#7DB343")
}
else{
$(".w3").show();
$("#qq3").hide();
$("#s3").hide();
$(".s1").html(x+" : 3");
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
    $(".lf4").css("-webkit-animation"," time 30s");
 $(".left").removeClass("-webkit-animation");
if($("#ans4").val()==24){
x++;
$(".c4").show();
$("#qq4").hide();
$("#s4").hide();
$("#ans4").hide(50);
$(".c4").css("-webkit-animation"," ans 1s");
$(".s1").html(x+" : 4");
$(".qc").hide();
$(".ans").css("color","#7DB343")
}
else{
$(".w4").show();
$("#qq4").hide();
$("#s4").hide();
$(".s1").html(x+" : 4");
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
    $(".lf5").css("-webkit-animation"," time 30s");
 $(".left").removeClass("-webkit-animation");
if($("#ans5").val()==0){
x++;
$(".c5").show();
$("#qq5").hide();
$("#s5").hide();
$("#ans5").hide(50);
$(".c5").css("-webkit-animation"," ans 1s");
$(".qc").hide();
$(".s1").html(x+" : 5");
$(".ans").css("color","#7DB343")
}
else{
$(".w5").show();
$("#qq5").hide();
$("#s5").hide();
$(".s1").html(x+" : 5");
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
   if(x<5){
       $(".wld").html("LOST");
       $(".wld").css("background-color","#f00");
       $(".re").css("background-color","#f00");
   }
    $(".result").show();
    $(".p1i").show();
    $(".p2i").show();
    $(".vs").show();
    $("#rp1").css("-webkit-animation","pic1 0.5s");
    $("#rp2").css("-webkit-animation","pic2 0.5s");
   $(".wld").css("-webkit-animation","result 0.5s");
    $(".re").css("-webkit-animation","re 0.5s");
    $(".find").css("-webkit-animation","re 0.5s");
    $("#rn1").show();
    $("#rnn1").show();
    $("#rnn2").show();
    $("#rn2").show();
    
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
    $("#p1").css("-webkit-animation"," go1 1s");
    $("#p2").css("-webkit-animation"," go2 1s");
});
$(".decline").click(function(){
    $("body").hide();
});

var name=prompt("Enter your name");
if (name==null || name==""){
      name="Guest";
  }
var l=prompt("Hey "+name+", Enter your sololearn level");
if (l==null || l=="" ||(l>16 || l<1)){
      l="0";
  }
var sid=prompt("Enter your Sololearn Id (optional)\nEx:3268934;" );
if (sid==null || sid==""){
    sid=1;
}

var pic="https://api.sololearn.com/Uploads/Avatars/"+sid+".jpg";
 $("#p1").attr("src",pic);
 $("#rp1").attr("src",pic);
 $("#pp1").attr("src",pic);
 $("#n1").html(name);
 $("#rn1").html(name);
 $("#nn1").html("LEVEL "+l);
 $("#rnn1").html("LEVEL "+l);
 $("#n2").html(name);
 $("#nn2").html("LEVEL "+l);
 var src = "https://api.sololearn.com/Uploads/Avatars/1.jpg"; 
 var img=$("#p1");
 img.on('load', function(e){  }).on('error', function(e) { $("#p1").attr("src",src);
 $("#rp1").attr("src",src);
 $("#pp1").attr("src",src); });
})
//alert ("Not yet completed");



