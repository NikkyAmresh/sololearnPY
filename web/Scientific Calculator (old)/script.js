function v(){try{navigator.vibrate()}catch(bi){}}function uv(){try{navigator.vibrate(100)}catch(biu){}}function del(){var s=document.getElementById("screen3").innerHTML;e=document.getElementById("screen").innerHTML;y=document.getElementById("screen2").innerHTML,document.getElementById("screen").innerHTML=e.substring(0,e.length-1),document.getElementById("screen3").innerHTML=s.substring(0,s.length-1),document.getElementById("screen2").innerHTML=y.substring(0,y.length-1);if(y.length==1){$("#screen2").html("00.00");}}$(function(){$("#screen").html(""),$("#calcButtone").html(window.atob("Q29weXJpZ2h0IKkgTmlra3kgQW1yZXNo")),$("#screen2").html("00.00"),$("#calcBody").hide(),$("#calcBody").fadeIn();var t=0;op="",$("#sq").click(function(){$("#screen3").append("Math.square("),$("#screen").append("square("),v()}),$("#cm").click(function(){$("#screen3").append(","),$("#screen").append(","),v()}),$("#pw").click(function(){$("#screen3").append("Math.pow("),$("#screen").append("pow("),$(".msg").html("X<sup><sup>y</sup></sup> is same as pow(x,y)"),$(".msg").show(),$(".msg").fadeOut(1e4),v()}),$("#lg").click(function(){$("#screen3").append("Math.log("),$("#screen").append("log<sub>e</sub>("),v()}),$("#rt").click(function(){$("#screen3").append("Math.sqrt("),$("#screen").append("√("),v()}),$("#lg10").click(function(){$("#screen3").append("Math.log10("),$("#screen").append("log<sub>10</sub>("),v()}),$("#tan").click(function(){$("#screen3").append("Math.tan("),$("#screen").append("tan("),v()}),$("#sin").click(function(){$("#screen3").append("Math.sin("),$("#screen").append("sin("),v()}),$("#cos").click(function(){$("#screen3").append("Math.cos("),$("#screen").append("cos("),v()}),$("#tan1").click(function(){$("#screen3").append("(180/Math.PI)*Math.atan("),$("#screen").append("tan<sup>-1</sup>("),v()}),$("#sin1").click(function(){$("#screen3").append("(180/Math.PI)*Math.asin("),$("#screen").append("sin<sup>-1</sup>("),v()}),$("#cos1").click(function(){$("#screen3").append("(180/Math.PI)*Math.acos("),$("#screen").append("cos<sup>-1</sup>("),v()}),$("#pi").click(function(){$("#screen3").append("Math.PI"),$("#screen").append("π"),v()}),
$("#1").click(function(){$("#screen3").append("1"),$("#screen").append("1"),v()}),$("#2").click(function(){$("#screen3").append("2"),$("#screen").append("2"),v()}),$("#3").click(function(){$("#screen3").append("3"),$("#screen").append("3"),v()}),$("#4").click(function(){$("#screen3").append("4"),$("#screen").append("4"),v()}),$("#5").click(function(){$("#screen3").append("5"),$("#screen").append("5"),v()}),$("#6").click(function(){$("#screen3").append("6"),$("#screen").append("6"),v()}),$("#7").click(function(){$("#screen3").append("7"),$("#screen").append("7"),v()}),$("#8").click(function(){$("#screen3").append("8"),$("#screen").append("8"),v()}),$("#9").click(function(){$("#screen3").append("9"),$("#screen").append("9"),v()}),$("#0").click(function(){$("#screen3").append("0"),$("#screen").append("0"),v()}),$("#st").click(function(){$("#screen3").append("("),$("#screen").append("("),v()}),$("#ed").click(function(){$("#screen3").append(")"),$("#screen").append(")"),v()}),$("#equal").click(function(){var x=document.getElementById("screen3").innerText;try{x=eval(x),document.getElementById("screen2").innerHTML="Ans:"+x,uv()}catch(e){document.getElementById("screen2").innerHTML="<font color=red>Syntax Error</font>",uv()}}),$("#point").click(function(){$("#screen3").append("."),$("#screen").append("."),v()}),$("#plus").click(function(){$("#screen3").append("+"),$("#screen").append("+"),v()}),$("#minus").click(function(){$("#screen3").append("-"),$("#screen").append("-"),v()}),$("#x").click(function(){$("#screen3").append("*"),$("#screen").append("x"),v()}),$("#div").click(function(){$("#screen3").append("/"),$("#screen").append("÷"),v()}),$("#ac").click(function(){$("#screen3").html("");$("#screen").html("");$("#screen2").html("00.00");var value2=eval($("#screen").innerTexT);$("#screen2").html(eval()),v()})});