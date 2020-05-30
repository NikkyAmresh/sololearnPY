// Created by Raj Shekhar


window.onload = function(){
    
    var canvas = document.createElement("canvas"),
       c = canvas.getContext("2d"),
       particleIndex = 0,
       particleArray = [],
       particleNum = 20; 
    
    canvas.width = 345;
    canvas.height = 495; 
     
    document.body.appendChild(canvas);
    
    function particle() {
       this.x = Math.random() * 345; 
       this.y = Math.random() * 495;
       this.vx = 0;
       this.vy = 0;
       particleIndex++; 
       particleArray[particleIndex] = this;
       this.id = particleIndex;
       this.life = 0;
       this.lifemax = 90;
       this.gravity = 0.0; 
    }
    
    particle.prototype.draw = function() {
        
      if (this.y < canvas.height / 2 + 38 && this.x < canvas.width / 2 + 38 &&
       this.y > canvas.height / 2 - 38 && this.x > canvas.width / 2 - 38 ) {
         delete particleArray[this.id];
       } else {
       c.fillStyle = "white";
       c.fillRect(this.x,this.y,3,3);
        
       this.vy += this.gravity;
       this.vx *= 0.91;
       this.vy *= 0.91;
       this.y += this.vy;
       this.x += this.vx;
       this.life++;
      
       if (this.life == this.lifemax) {
          delete particleArray[this.id]; 
       }
       
       
       if (this.y > canvas.height / 2 && this.x < canvas.width / 2) {
           this.vx += 1;
       }
       
       if (this.y < canvas.height / 2 && this.x < canvas.width / 2) {
           this.vy += 1;
       }   
         
       if (this.y > canvas.height / 2 && this.x > canvas.width / 2) {
           this.vy -= 1; 
       }   
       
          
       if (this.y < canvas.height / 2 && this.x > canvas.width / 2) {
           this.vx -= 1;
       }  
       
       }
               
    };
      
    setInterval(function(){
        c.fillStyle = "black";  
        c.fillRect(0,0,canvas.width,canvas.height);
        
        for(var i = 0; i < particleNum; i++) {
           new  particle();
        }
        
        for(var i in particleArray) {
           particleArray[i].draw();
        }
        
    }, 3);
};