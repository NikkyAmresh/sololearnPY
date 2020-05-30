ev = [0,0];

onload = function() {
    mul("div[0]","touchCallout='none'");
    mul("div[0]","userSelect='none'");
    if (/iphone|ipad|android/gmi.test(navigator.userAgent)) {
        ontouchstart = ontouchmove = function(e) {
            if (!/Button|Input/gmi.test(e.target.toString())) {
                e.preventDefault();
            }
                ev = [e.touches[0].pageX,e.touches[0].pageY];
        };
    } else {
        onmousedown = onclick = onmousemove = function(e) {
            if (!/button|input/gmi.test(e.target.toString())) {
                e.preventDefault();
            }
            ev = [e.pageX,e.pageY];
        };
    }
    win("act('&%#$');doc.body.style.background=rnd()");
};