

var hidden = 0;
var power = 1;

document.createElement("window");
$("head").prepend("<style id='winStyle'></style>");
$(function(){
var height = document.documentElement.clientHeight * .85;
$("window").css("minHeight", height);
 $("#winStyle").append("window{width:80vw;height:85vh;background-color:#FFF;position:absolute;left:10vw;top:5vh;overflow:auto;visibility:hidden;}");
var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.width = document.documentElement.clientWidth * .80;
c.height = document.documentElement.clientHeight * .85;
ctx.lineWidth = "3";
ctx.strokeStyle = "#000";
ctx.fillStyle = "#000";
c.addEventListener("touchstart", function(e){
    e = e.changedTouches[0];
    var x = e.clientX;
    var y = e.clientY;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}, false);
c.addEventListener("touchmove", function(e){
   e.preventDefault();
   e = e.changedTouches[0];
   var x = e.clientX - (document.documentElement.clientWidth * .1);
   var y = e.clientY - (document.documentElement.clientHeight * .05); ;
   ctx.lineTo(x, y);
   ctx.stroke();
}, false);
$("#clrPaint").click(function(){
    ctx.clearRect(0, 0, c.width, c.height);
});
});
$(function(){
    function cal(){
    var calBox = document.querySelector("#cal");
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    var months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    var date = new Date();
    var maxDays = 31;
    var month = date.getMonth();
    if(month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){
        maxDays = 31;
    }
    else if(month == 1){
        maxDays = 28;
    }
    else if(month == 3 || month == 5 || month == 8 || month == 10){
        maxDays = 30;
    }
    var day = days[date.getDay()];
    var dateNum = date.getDate();
    // Calculate first day of month
    var dateX = dateNum - date.getDay();
    var i = 6;
    while(dateX > 0){
        if((dateX % 6) >= 1){
            dateX -= 6;
        }
        else{
            i -= dateX
            dateX -= dateX;
        }
    }
    i += 8;
    $(".day").eq(0).text(months[month]);
    $(".day").eq(i).text("1")
    var cnt = 1;
    while(cnt <= maxDays){
        $(".day").eq(i).text(cnt);
        ++cnt;
        ++i;
    }
    $(".day:contains('" + dateNum + "')").css({
        "background" : "#DDD"
    });
}
cal()
    function email(addr, subj, body){
    subj=subj.replace(/\s/g, "%20");
    body=body.replace(/\s/g, "%20");
    var link = "mailto:" + addr + "?subject=" + subj + "&body=" + body;
    return link;
}
    function windowOpen(id, zpos){
        $(id).css({"zIndex":zpos, "visibility":"visible"});
        $(id).slideUp(0);
        $(id).slideDown(50);
        hidden = 1;
    }
    function windowClose(id){
        $(id).slideUp(50);
        function hide(){
        $(id).css({"zIndex":"0", "visibility":"hidden"});
        hidden = 0;
        }
        setTimeout(hide, 50);
    }
    $("#bright").change(function(){
        var val = $(this).val();
        if(val.length < 2){
            val = "0." + val;
        }
        else{
            val = "1.0";
        }
        $("#brightness").css("opacity", val);
    });
    $("#home").click(function(){
       if(hidden == 1){ $("window").css({"zIndex":"0","visibility":"hidden"});
       hidden = 0;
       }
       else{
           windowOpen("#apps", 3);
           hidden = 1;
       }
        
    });
    $("#search").keyup(function(e){
        if(e.which == 13){
           var val = $("#search").val();
           val = val.replace(/\s/ig, "+");
           var query = "http://google.com/search?q=" + val;
           window.open(query);
        }
    });
    $("#ppl").click(function(){
        windowOpen("#contacts", "2")
    });
    $(".btnC").click(function(){
        var which = $(this).text();
        if(which == "CE"){
           $("#scn").text("");
        }
        else if(which == "="){
          var mathVal = $("#scn").text();
          mathVal = mathVal.replace(/π/ig, "(3.14)");
          try{
          $("#scn").text(eval(mathVal))
          }
          catch(e){
             $("#scn").text("ERROR")
          }
        }
        else{
           var mathVal = $("#scn").text();
           mathVal += which;
           $("#scn").text(mathVal);
           
        }
    });
    $("#calc").click(function(){
        windowOpen("#calculator", "2");
    });
    $("#bgcolor").keyup(function(e){
    if(e.which == 13){
        $("#screen").css("background", $(this).val());
        $("#bgcolor").css("background", $(this).val());
        $(this).trigger("blur");
        }
        else{
            
        }
    });
    $("#openSet").click(function(){
        windowOpen("#settings", 2);
    });
    $("#openEmail").click(function(){
        windowOpen("#email", 2);
    });
    $("#sendEmail").click(function(){
        var addr = $("#addr").val();
        var subj = $("#subj").val();
        var body = $("#ebody").val();
        var mail = email(addr, subj, body);
        window.open(mail);
    });
    $("#openNews").click(function(){
        windowOpen("#news", 2);
    });
    $("#openNotes").click(function(){
        windowOpen("#notepad", 2);
    })
    $("#openPaint").click(function(){
        windowOpen("#paint", 2);
    });
    $("#openCal").click(function(){
        windowOpen("#calendar", 2);
    });
    $("#power").click(function(){
        if(power == 1){
           windowOpen("#blackScn", 4);
           power = 0;
        }
        else {
           windowClose("#blackScn");
           power = 1; 
        }
    });
    setInterval(function(){
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var mer;
        if(h > 12){
            h = h - 12;
            mer = "PM";
        }
        else{
            mer = "AM"
        }
        if(m <= 9){
            m = "0" + m;
        }
        else{
            m = m;
        }
        var time = h + ":" + m + " " + mer;
        $("#clock").text(time);
    }, 500);
});