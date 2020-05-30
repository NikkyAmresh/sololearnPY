// Created by NepZ



alert("I will show you that you can view anyone's certificate and Avatar");

alert("If you like it, give this a thumbs up.");
window.onload = function() {
        var cid = window.parent.userId?window.parent.userId:0;
        if(cid){
        
            document.getElementById("vId").innerHTML = "Your userId is "+ cid;
            document.getElementById("uid").value = cid;
        }else{
            document.getElementById("vId").innerHTML = "Example userId: 2551505";
            document.getElementById("uid").value = "2551505";
        }
        var bts = document.getElementsByTagName("button");
        document.getElementById("uid").addEventListener("focus", function(){this.style.backgroundColor = "#8B0000";})
        document.getElementById("uid").addEventListener("blur", function(){this.style.backgroundColor = "";})
        for(var q=0; q<bts.length; q++){
          bts[q].addEventListener("mouseover", function(){this.style.backgroundColor = "#8B0000"});
          bts[q].addEventListener("mouseout", function(){this.style.backgroundColor = ""});
            
        }
}
function getPic() {
    
        var uid = document.getElementById("uid").value;
        if(!isNaN(uid)){
        document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://api.sololearn.com/Uploads/Avatars/" + uid + ".jpg\" onerror=\"alert('No picture or userid not found')\"/>";
     }
     else{
     
         document.getElementById("output").innerHTML = "I've been told not to accept letters. shhhh";        
     }
    }
function getPHPCert() {
        
        var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1059-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed PHP Tutorial Course.')\"/>";

    
}

function getHTMLCert() {
       var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1014-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed HTML Tutorial Course.')\"/>";
}
function getPYCert(){
    var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1073-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed Python Tutorial Course.')\"/>";
}
function getJSCert() {

    var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1024-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed Javascript Tutorial Course.')\"/>";
}
function getSQLCert(){
    var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1060-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed SQL Tutorial Course.')\"/>";
}
function getCSSCert() {
      var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1023-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed SQL Tutorial Course.')\"/>";
}
function getCPPCert() {
 var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1051-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed C++ Tutorial Course.')\"/>";
}
function getJAVACert(){
     var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1068-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed JAVA Tutorial Course.')\"/>";
}
function getSWIFTCert() {
    var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1075-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed SWIFT Tutorial Course.')\"/>";
}
function getCSHARPCert(){
    var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1080-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed C# Tutorial Course.')\"/>";
}
function getRUBYCert() {
    var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1081-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed C# Tutorial Course.')\"/>";
}
function getJQUERYCert() {
     var uid = document.getElementById("uid").value;
         document.getElementById("output").innerHTML = "<img class=\"img\" src=\"https://www.sololearn.com/Certificate/1082-"+ uid +"/jpg/\" onerror=\"alert('No such Userid OR Userid has not completed Jquery Tutorial Course.')\"/>";

    
}


