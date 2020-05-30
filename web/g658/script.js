// Created by Sami Khan (Mr. Khan)

$(document).ready(function(){
     $("#edit").delay(60100).fadeOut(2000);
      $("#note").delay(60100).fadeOut(2000);
      $("#Loader").delay(6150).fadeOut(2000); 
   $('#clk').on('click',function(){
        var audio = $('.song')[0];
        audio.play();  
    try{
    navigator.vibrate(20);
}
catch(Exception)
{console.log("Your Device does not support navigator vibrate ");}

}); 
});
alert("Please Watch Till Music Ends!!");