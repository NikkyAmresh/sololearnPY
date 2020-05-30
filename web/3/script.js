// Created by Ranjan

window.onload = function() {
    var can = document.createElement("canvas");
    can.height = window.innerHeight;
    can.width = window.innerWidth;
    document.body.appendChild(can);
    ctx = can.getContext("2d");
    
    function mandlebrot(x,y){
        var rc = x;
        var ic = y;
        var maxIt = 450;
        for(var i=0;i<maxIt;i++){
            var tRc = rc*rc-ic*ic+x;
            var tIc = 2*Math.abs(rc*ic)+y;
            rc = tRc;
            ic = tIc;
            if(rc*ic>20)
                return (i/maxIt*1100);
        }
        return 0;
    }
    var mF = 100;
    var pX = 2.2;
    var pY = 2.97;
    for(var x = 0; x<can.width; x++) {
        for(var y = 0; y<can.height; y++){
            var checkIf = mandlebrot(x/mF-pX,y/mF-pY);
            if(checkIf == 0) { 
            ctx.fillStyle = '#000'; 
            ctx.fillRect(x,y, 1,1);  
            } 
            else { 
            ctx.fillStyle = 'hsl(20, 100%, ' + checkIf + '%)'; 
            ctx.fillRect(x,y, 1.5,1.5); 
            }
        }
    }
    
}