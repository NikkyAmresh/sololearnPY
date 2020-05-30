
//Made by Elizabeth Espíndola, please don't copy
function OpenClose()
{
   var danbo= document.getElementById("danbo");
   var button= document.getElementById("opcl");
   var s1= document.getElementById("sheet1");
   var s2= document.getElementById("sheet2");
   //Here I use the button text to decide whether to open or close the "card"
   if(button.innerHTML=="Click to open")
   {
     //I decided to display only after clicking to open so the css animation starts in that moment
      danbo.style.display="inherit";
      button.innerHTML="Click to close";
    var w=160;  
    var t = setInterval(open, 5);
    function open() {
        //if the sheets have no width the card is fully "opened"
        if(s1.style.width == "0px") {
            clearInterval(t);
        }
        else {
        //decrease 2 pixels in the sheets width every time
            w-=2;
            s1.style.width = w+"px"; 
            s2.style.width = w+"px"; }
    }
   }
   //if button says click to close
   else
   {
      var w=0;  
    var t = setInterval(close, 5);
    function close() {
    //if it's fully closed stop calling the function 
        if(s1.style.width == "160px")
         { clearInterval(t);
         //I choosed to stop displaying when it finished closing so the danbo doesn't vanish before that
         danbo.style.display="none";
    button.innerHTML="Click to open"; }
        else {
        //increase their width 2 pixels each 
            w += 2;
            s1.style.width = w+"px";}
            s2.style.width = w+"px"; }                 
            }
  }
