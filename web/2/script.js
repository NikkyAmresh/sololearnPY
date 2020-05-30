// Created by Ranjan

window.onload = function() {
    var can = document.createElement("canvas");
    can.height = window.innerHeight;
    can.width = window.innerWidth;
    document.body.appendChild(can);
    ctx = can.getContext("2d");
    
    function juliaSet(x,y){
        var rc = x;
        var ic = y;
        var maxIt = 500;
        for(var i=0;i<maxIt;i++){
            var tRc = rc*rc-ic*ic-0.8;
            var tIc = 2*(rc*ic)+0.156;
            rc = tRc;
            ic = tIc;
            if(rc*ic>50)
                return (i/maxIt*500);
        }
        return 0;
    }
    var mF = 120;
    var pX = 1.5;
    var pY = 2;
    for(var x = 0; x<can.width; x++) {
        for(var y = 0; y<can.height; y++){
            var checkIf = juliaSet(x/mF-pX,y/mF-pY);
            if(checkIf == 0) { 
            ctx.fillStyle = '#000'; 
            ctx.fillRect(x,y, 1,1);  
            } 
            else { 
            ctx.fillStyle = 'hsl(190, 100%, ' + checkIf + '%)'; 
            ctx.fillRect(x,y, 1,1); 
            }
        }
    }
    
}