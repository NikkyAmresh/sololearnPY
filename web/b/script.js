// Created by Ranjan

window.onload = function() {
    var can = document.createElement("canvas");
    can.height = window.innerHeight  ;
    can.width = window.innerWidth;
    document.body.appendChild(can);
    ctx = can.getContext("2d");
    
    function mandlebrot(x,y){
        var rc = x;
        var ic = y;
        var maxIt = 15;
        for(var i=0;i<maxIt;i++){
            var tRc = rc*rc-ic*ic+x;
            var tIc = 2*(rc*ic)+y;
            rc = tRc;
            ic = tIc;
            if(rc*ic>50)
                return (i/maxIt*150);
        }
        return 0;
    }
    var mF = 170;
    var pX = 2.1;
    var pY = 1.05;
    for(var x = 0; x<can.width; x++) {
        for(var y = 0; y<can.height; y++){
            var checkIf = mandlebrot(y/mF-pX,x/mF-pY);
            if(checkIf == 0) { 
            ctx.fillStyle = '#ffbf00'; 
            ctx.fillRect(x,y, 1,1);  
            } 
            else { 
            ctx.fillStyle = 'hsl(45,'+(checkIf%3)+'%, ' + checkIf + '%)'; 
            ctx.fillRect(x,y, 1.5,1.5); 
            }
        }
    }
   // ctx.translate(can.width/2,0)
   // ctx.rotate(Math.PI/2);
    
}