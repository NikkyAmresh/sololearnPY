$(function(){
var w=["word","nk","yes"];
Shuffle(w)
var h = $(document).height(),
    w = $(document).width();
var interval = setInterval(function() {
var strl = Math.random()*w-100,
    stro = 0.5 + Math.random(),
    dur = h * 10 + Math.random() * 5000;
    $('<span/>').css({
    position: 'absolute',
    top: '-10px',
    left: strl,
    opacity: stro,
    "font-size": 28+Math.random()*15,
    color: "#fff"
    }).html("&#10052").clone().appendTo('body').animate({top:h-40,
    left:strl - 100 + Math.random() * 200,
    opacity:0.2
    },dur,'linear',function(){$(this).remove()});}, 300);
})
function Shuffle(o){
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
     return o; 
}