// Created by Andrew

$(function(){
  function virus(){
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        var y = Math.floor((Math.random() * height) + 1);
        var x = Math.floor((Math.random() * width) + 1);
        var z = $("<div></div>").css("left", x);
        var zz = $(z).css("top", y);
        var colorb = Math.floor((Math.random() * 5) + 1);
        if(colorb == 1){
            var zzz = $(zz).css("backgroundColor", "#FFFFFF");
        }
        else if(colorb == 2){
             var zzz = $(zz).css("backgroundColor", "#FFFFFF");
        }
        else if(colorb == 3){
             var zzz = $(zz).css("backgroundColor", "#777733");
        }
        else if(colorb == 4){
             var zzz = $(zz).css("backgroundColor", "#00AAFF");
        }
        else{
             var zzz = $(zz).css("backgroundColor", '#FFFFFF');
        }
        $("body").append(zzz);
        var total = $("body").children().length;
        $("#num").text(total);
        }
     setInterval(virus, 10);
});