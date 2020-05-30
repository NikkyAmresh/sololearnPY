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
 var y=date.getYear();
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
            $(".login_pass").attr("value","");
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
        $(".rc").hide()
    })
    $("#refresh").click(function(){
        $("desktop").css("-webkit-animation","rfrs 0.1s")
        $("#rc").hide();
    });
     $("#bg").click(function(){
        $("#color").click();
        $("#rc").hide();
    });
    $("#color").on("change",function(){
        var color=$("#color").val();
        $(".desktop").css({
        "background-image":"",
        "background-color":color
        });
        $(".cin").css("background-color",color);
    
    })
     $("#so").click(function(){
        $("#rc").hide();
        $(".login").show();
    })
    $("#def").click(function(){
       $("#rc").hide();
       $(".desktop").css({
        "background-image":"https://preview.ibb.co/fFDagk/windows_10_hero_4k_wallpaper_3840x2160.jpg",
        "background-color":""
        }); 
        $(".cin").css("background-color","#003D73");
    })
$(".tdate").html(mm+1+"/"+dd+"/"+y);
$(".ttime").html(time);
});
$(document).on("mousemove", function(e){
   var x = e.pageX || e.clientX;
   var y = e.pageY || e.clientY;
 $("#mouse").css({
 "top" : y+1+"px",
 "left" : x+1+"px"
    });
 });
 $(document).on("contextmenu",function(e){
     var w = e.pageX || e.clientX;
     var z = e.pageY || e.clientY;
     $("#rc").show();
     $("#rc").css({"top":z,"left":w});
 });
//alert("Not yet completed \n\n*Right click added\nif you are using mobile.. \nlong press for access right click");
//alert("Password : 0000")
