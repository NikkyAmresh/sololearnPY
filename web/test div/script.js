$(function(){
    $("#text").html(words[Math.floor(Math.random()*words.length)])
    $("button.btn").click(function(){
        $("button.btn").css(
            "transform","scale(0.8)"
        )
        $("#text").css(
            "opacity","0"
        )
        setTimeout(function(){$("#text").css("opacity","0.3")},200)
        setTimeout(function(){$("#text").css("opacity","0.7")},400)
        setTimeout(function(){$("#text").css("opacity","1")},600)
        
        setTimeout(function(){$("button.btn").css("transform","scale(1)")},100)
        $("#text").html(words[Math.floor(Math.random()*words.length)])
    })
})