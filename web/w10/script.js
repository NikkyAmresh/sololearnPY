$(function(){
    $(".lockscreen").click(function(){
    $(".lockscreen").show();
 $(".lockscreen").css("-webkit-animation"," open 2s");
 setTimeout(function(){
     $(".lockscreen").hide();
 },999)
    });
    $(".header").click(function(){
    $(".lockscreen").show();
 $(".lockscreen").css("-webkit-animation"," close 1s");
    });
 var date=new Date();
 var h=date.getHours();
 var m=date.getMinutes();
 m<10?m="0"+m:m=m;
 var z=date.getDay();
 var dd=date.getDate();
 var mm=date.getMonth(); d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 var mo=["January","February","March","April","May","June","July","August","September","October","November","December"];
 var day=d[z]+",";
 var time=h+":"+m;
 var mon=mo[mm];
 var date=dd+" "+mon;
 $("span.time").html(time);
 $("div span.day").html(day);
 $("div span.date").html(date);
 $(".sign_in").click(function(){
        if($(".login_pass").val()=="0000"){
            $(".login").hide();
        }
       else {if($(".login_pass").val==""){
            alert("Nan");}
            else{
            alert("Incorrect Password");
        }
        }
        
    })
    $(".start").on("mouseover",function(){
        $(".menu").show();
        $(".news").show();
    });
    $(".desktop").click(function(){
        $(".menu").hide();
        $(".news").hide()
    })

});
$(document).on("mousemove", function(e){
 var x = e.pageX || e.clientX;
 var y = e.pageY || e.clientY;
 $("#mouse").css({
 "top" : y+1+"px",
 "left" : x+1+"px"
    });
 });
 //alert("Not yet completed ");
// alert("Password : 0000")
