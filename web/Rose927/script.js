$(function(){
    run();
    b_ani();
});
function run(){
    $("path").css("stroke","#000");
}
function b_ani(){
    $("#b").css("animation","b 10s linear");
    $("#c").css("stroke-dashoffset","70");
    $("#d").css("stroke-dashoffset","70");
    setTimeout(function(){
        $("#b").css("fill","#3e721d");
        c_ani();
        $("#b").css("stroke-dashoffset","105");
    },10000);
}
function c_ani(){
    $("#c").css("animation","c 10s linear");
    $("#d").css("stroke-dashoffset","70");
    setTimeout(function(){
        $("#c").css("fill","#eee");
        d_ani();
    },10000);
}
function d_ani(){
    $("#d").css("animation","d 10s linear");
    setTimeout(function(){
        $("#d").css("fill","#fff");
        setTimeout(function(){
        $("body").css("border","3px solid #4CAF50");
        setTimeout(function(){alert("For someone 💖 special 😜");},1000);
         },1000);
    },10000);
}