var config = {
    apiKey: "AIzaSyDNHeyNDAM8aub45Wc39AilE91pzGzycb4",
    authDomain: "chatty-app-test.firebaseapp.com",
    databaseURL: "https://chatty-app-test.firebaseio.com",
    projectId: "chatty-app-test",
    storageBucket: "",
    messagingSenderId: "149800421780" 
  };
    var color,title,email,pass;
  firebase.initializeApp(config);
  var auth=firebase.auth();
     var user=auth.currentUser;
/*
function prompt(e){
       var text1 = $("#txt1");
       var text2 = $("#txt2");
       $("#p_n").html(e);
       $("#input").dialog({
       dialogClass: "no-close",
        buttons: {
            "Ok": function() {
                
                //Do your code here
                text1.val(text2.val());
                $(this).dialog("close");
                return text1.val();
            },
            "Cancel": function() {
                $(this).dialog("close");
            }
        }
    });
    return text1.val();
}
*/

function alert(e,color){
      void 0==color&&(color="red");
      $("#error").html("<b><font color="+color+">"+e+"</font></b>");
      $("#error").dialog({
          dialogClass: "no-close",
          buttons: [{
            text: " Got it! ",
            click: function() {
        $( this ).dialog( "close" );
        }
            }]})
  }
  email=$("#email").val()+"@chatty.com";
  pass=$("#pass");
function login(){
 auth.signInWithEmailAndPassword(($("#email").val()+"@chatty.com"),$("#pass").val()). catch(function(eer) {
  var error = eer.message;
    var ec= eer.code;
    authe(ec);
});
}
function sign_up(){
   auth.createUserWithEmailAndPassword(($("#email").val()+"@chatty.com"),$("#pass").val()).catch(function(eer) {
  var error = eer.message;
    var ec= eer.code;
    authe(ec);
});
}
function authe(ec){
    if(ec=="auth/user-not-found"){
       alert("Mobile number not registered");
   }else{
     if(ec=="auth/network-request-failed"){
         alert("Please check your internet connection!");
     }else{
     if(ec=="auth/email-already-in-use"){
         alert("Mobile number already registered");
     }else{
     if(ec=="auth/weak-password"){
         alert("Weak Password!");
     }else{
     if(ec=="auth/invalid-email"){
         alert("Invalid mobile number! ");
     }else{
        if(ec=="auth/wrong-password"){
        alert("Wrong Password");
        }else{
       alert(ec);}
       }}
       }
       }
   }
}
function check(e){
     ""==$("#email").val().trim()?($("#email").focus(),
     alert("Please enter Mobile number")):$("#email").val().length<7?($("#email").focus(),
     alert("Mobile number too short!")):""==$("#pass").val().trim()?($("#pass").focus(),
     alert("Please enter you password")):$("#pass").val().length<6?($("#pass").focus(),
     alert("Password to short")):(0==e?sign_up():login());
}
function photo_update(){
var user = firebase.auth().currentUser;
   var solo_id=prompt("Enter your Sololearn id","1");
    user.updateProfile({ 
  photoURL:solo_id
}).then(function() {
$("img.avatar").attr("src","https://api.sololearn.com/Uploads/Avatars/"+solo_id+".jpg");
}).catch(function(error) {
});
}
function name_update(){
var user = firebase.auth().currentUser;
   var name=prompt("Enter your name");
    user.updateProfile({ 
   displayName:name
}).then(function() {
$("#p_name").html(name);
}).catch(function(error) {
});
}
$(function(){
    $("button#sp").click(function(){
     check(0);
    });
      $("button#login").click(function(){
     check(1);
    });
    $("#so").click(function(){
    
    firebase.auth().signOut().then(function() {
    $("#email").val("");
    $("#pass").val("");
    alert("successful sign out","#4AC75F");
   
   }).catch(function(error) {
     errm(error.message);
   
    });
   });
 firebase.auth().onAuthStateChanged(function(user){
         if(user){ 
          $("#type").html("User's Profile");
         $("#login_form").hide();
         $(".bar").css("margin-top","30px");
         $("#sign_out").show();
         
    
         
         
         
          
         var user = firebase.auth().currentUser;
if (user != null) {
  user.providerData.forEach(function (profile) {
    if(profile.displayName==null || profile.photoURL==null){
photo_update(user);
name_update(user);
}else{
    user.providerData.forEach(function (profile) {var name5=profile.displayName;
            alert("Logged in as "+ name5,"#4a6");
            $("img.avatar").attr("src","https://api.sololearn.com/Uploads/Avatars/"+profile.photoURL+".jpg");
            $("#p_name").html(name5);
            });
}
  });
}}
            else{
             $("#login_form").show();
             $("#sign_out").hide();
             $("#type").html("Authentication");
             $(".bar").css("margin-top","80px");
            }
            
          }); 
});
            