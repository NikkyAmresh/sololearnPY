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
    $("#d").css("stroke-dashoffset","115");
    setTimeout(function(){
        $("#b").css("fill","#77b255");
        c_ani();
        $("#b").css("stroke-dashoffset","140");
    },10000);
}
function c_ani(){
    $("#c").css("animation","c 10s linear");
    $("#d").css("stroke-dashoffset","115");
    setTimeout(function(){
        $("#c").css("fill","#ea596e");
        d_ani();
    },10000);
}
function d_ani(){
    $("#d").css("animation","d 10s linear");
    setTimeout(function(){
        $("#d").css("fill","#f4abba");
        setTimeout(function(){
        $("body").css("border","3px solid #4CAF50");
         },1000);
    },10000);
}