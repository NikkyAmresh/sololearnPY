// Created by Anna Ranguin

//make tiles draggable


window.onload = function() {

    function initEvent() {
        
        tiles = document.querySelectorAll(".drag");
        
        
        for ( i = 0; i < tiles.length; i++) {
            t = tiles [i];
            t.addEventListener("touchmove", function(event) {
                
                touch = event.targetTouches[0];
                
                event.target.style.left = touch.pageX - 50 + "px";
                event.target.style.top = touch.pageY - 50 + "px";
                
                event.preventDefault();
            }, false);
        }
    }

    
    initEvent();
}

