$(function(){alert("Please one Like? 😊👍🏻🙏🏻\n Keypress Vibration added! "),$("#screen").html("");$("#screen2").html("00.00");var t=0;op="",$("#1").click(function(){$("#screen").append("1");v()}),$("#2").click(function(){$("#screen").append("2");v()}),$("#3").click(function(){$("#screen").append("3");v()}),$("#4").click(function(){$("#screen").append("4");v()}),$("#5").click(function(){$("#screen").append("5");v()}),$("#6").click(function(){$("#screen").append("6");v()}),$("#7").click(function(){$("#screen").append("7");v()}),$("#8").click(function(){$("#screen").append("8");v()}),$("#9").click(function(){$("#screen").append("9");v()}),$("#0").click(function(){$("#screen").append("0");v()}),$("#st").click(function(){$("#screen").append("(");v()}),$("#ed").click(function(){$("#screen").append(")");v()}),$("#equal").click(function(){var value=eval(document.getElementById("screen").innerText);$("#screen2").html("Ans: "+value);v();try{eval(value)}catch(n){n instanceof SyntaxError&&alert(n.message)}}),$("#point").click(function(){$("#screen").append(".");v()}),$("#plus").click(function(){$("#screen").append("+");v()}),$("#minus").click(function(){$("#screen").append("-");v()}),$("#x").click(function(){$("#screen").append("*");v()}),$("#div").click(function(){$("#screen").append("/");v()}),$("#ac").click(function(){$("#screen").html("");
var value2=eval($("#screen").innerTexT);$("#screen2").html(eval());v()})});function v(){navigator.vibrate(40);
}