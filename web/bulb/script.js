

function bulb(){
  var v = document.getElementById("bulbimg");
var b = document.getElementById("bulb");
if(b.value=="ON"){
document.getElementById("bulbimg").src="http://www.pngmart.com/files/1/Glowing-Bulb-Transparent-PNG.png";
   b.value="OFF";
   document.body.style.backgroundColor="#ffcc66";
   }
 else{
    document.body.style.backgroundColor="#000";
    v.src="http://findicons.com/files/icons/2166/oxygen/128/preferences_system_power_management.png";
    b.value="ON";
    
 }
 }