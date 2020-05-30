$(function(){
var h = $(document).height(),
    w = $(document).width();
var track= new Audio("http://feelslikechristmas.com/mps/PaukenBrumfiel_AngelsOnHigh.mp3");
var interval = setInterval(function() {
var strl = Math.random()*w-100,
    stro = 0.5 + Math.random(),
    dur = h * 10 + Math.random() * 5000;
    $('<span/>').css({
    position: 'absolute',
    top: '-10px',
    left: strl,
    opacity: stro,
    "font-size": 8+Math.random()*15,
    color: "#fff"
    }).html('&#10052').clone().appendTo('body').animate({top:h-40,
    left:strl - 100 + Math.random() * 200,
    opacity:0.2
    },dur,'linear',function(){$(this).remove()});}, 800);
   $(document).click(function(){track.play()});
alert("Click anywhere to enjoy the music");
alert("Merry Christmas");
alert("Click anywhere to enjoy the music");
});