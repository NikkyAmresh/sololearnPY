// Created by Jonathan



window.onload = function() {
    var time = new Date();
    var seed = parseInt(time.getMilliseconds());
    var multiplier = 1664525; //22865426; //1664525; //19754824;  //623445118;     
    var incre = 1013904223; //353567277898;
    var mod = Math.pow(2,32);
    
      //using the lcg formula
    function randSeed() {
      seed = (multiplier * seed + incre) % mod;
      return seed;
    }
    
    // function similar to Math.random()
    function randWhole() {
       var r = randSeed()/mod;   
       return r;
    }
    
    // main random function
    function rand(n1,n2) {
       var r = randSeed()/mod;   
       var r2 = Math.floor(r * (n2-n1-1)) + n1+1; 
       return r2;
    }
     
     //outputs
     var o = document.getElementById("out");
     o.innerHTML += "<br/> rand(2,10) <br/>";
     for(var i=0; i<50; i++) {
     o.innerHTML += rand(2,10) + ", ";
     }
     o.innerHTML += "<br/> <br/>rand(0,100) <br/>";
     for(var i=0;  i<50; i++) {
     o.innerHTML += rand(0,100) + ", ";
     }
     o.innerHTML += "<br/> <br/> rand(1,1000) <br/>";
     for(var i=0; i<50; i++) {
     o.innerHTML += rand(1,1000) + ", ";
     }
     
      // canvas visual period test
    var canv = document.getElementById("canv");
    var c = canv.getContext("2d");
    
    var y = 0;
    function draw() {
      for(var x=0; x<300; x++) {
        var z = randWhole();
        if( z > 0.8) {
          c.fillStyle = "red";
        }
        else if( z > 0.6) {
          c.fillStyle = "blue";
        }
        else if(z >0.4) {
          c.fillStyle = "yellow";
        }
        else if(z >0.2) {
          c.fillStyle = "green";
        }
        else {
          c.fillStyle = "black";
        }
         c.fillRect(x,y,1,1);
      }
      y++;
      if(y > 300) {
        clearInterval(setInt);
      }
    }
    var setInt = setInterval(draw,10)
   
}
