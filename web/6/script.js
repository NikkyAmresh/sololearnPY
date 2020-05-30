$(function(){
var blue = "https://openclipart.org/image/2400px/svg_to_png/218071/Car_Purple_Front.png";
var green = "https://openclipart.org/image/2400px/svg_to_png/218066/Car_Green_Front.png";
var red = "https://openclipart.org/image/2400px/svg_to_png/218068/Car_Red_Front.png";
    $(".floor").click(function(e){
        var x = e.pageX;
        var y = e.pageY;
        var you = $(".character");
        $(you).css("left", x);
        $(you).css("top", y);     
           var xx = x - 50;
  var yy = y - 50;
   var height = document.documentElement.clientHeight;
   var width = document.documentElement.clientWidth;
   var leftoverx = width - x;
  var leftovery = height - y;
      var dot = $("<div id='touch'></div>")
      var xxxx = $(dot).css("left", xx);
      var xxxxx = $(xxxx).css("top", yy);
      var div = $(xxxxx).css("borderColor", "#0077FF");
     $("body").prepend(div);
      $(div).width(0);
      $(div).height(0);
      $(div).css("left", x);
      $(div).css("top", y);
      var radius = 0 / 2
      $(div).css("borderRadius", radius);
      $(div).css("borderColor", "transparent");
      
        var car=$(".character");
var carCenter=[car.offset().left+car.width()/2, car.offset().top+car.height()/2];
var angle = Math.atan2(e.pageX- carCenter[0], - (e.pageY- carCenter[1]) )*(180/Math.PI);  
var turn = angle + 180;
        var rotation = "rotate(" + turn + "deg)";
        $(".character").css("transform", rotation);
    });
    var headlights = false;
    $("#light").click(function(){
        if(headlights == false){
$(".character").css("borderBottom",  "solid 15px rgba(255, 255, 100, .15)");
$(".character").css("borderTop",  "solid 5px rgba(255, 50, 50, .15)");
$("#light").css("color", "#FF0");
           headlights = true;
        }
        else{
                   $(".character").css("borderBottom", "solid 15px rgba(255, 255, 0, 0)");
$(".character").css("borderTop",  "solid 5px rgba(255, 50, 50, 0)");
$("#light").css("color", "#000")
                   headlights = false;
        }
    });
    $("#garage").click(function(){
        $(".garageMenu").css("visibility", "visible")
        $(".garageMenu").css("zIndex", "5")
        $(".character").css("left", "0");
        $(".character").css("top", "0");
        $(".character").css("transform", "rotate(0deg)").delay(5000);
    });
    $("#garageExit").click(function(){
        $(".garageMenu").css("zIndex", "0");
        $(".garageMenu").css("visibility", "hidden");
    });
    $("#blue").click(function(){
        $(".character").attr("src", blue);
        $("#prev").attr("src", blue);
    });
    $("#green").click(function(){
        $(".character").attr("src", green);
        $("#prev").attr("src", green);
    });
    $("#red").click(function(){
        $(".character").attr("src", red);
        $("#prev").attr("src", red);
    });
    $("#speed").change(function(){
        var newVal = $("#speed").val();
        var speed;
        if(newVal == 10){
            speed = 1;
        }
        else if(newVal == 9){
           speed = 2; 
        }
        else if(newVal == 8){
           speed = 3; 
        }
        else if(newVal == 7){
           speed = 4;
        }
        else if(newVal == 6){
           speed = 5; 
        }
        else if(newVal == 5){
           speed = 6; 
        }
        else if(newVal == 4){
            speed = 7;
        }
        else if(newVal == 3){
           speed = 8; 
        }
        else if(newVal == 2){
           speed = 9; 
        }
        else{
           speed = 10; 
        }
        var engine = "left " + speed + "s linear, top " + speed + "s linear";
        $(".character").css("transition", engine);
        
        
    });
    
    
    
});