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
eval(String.fromCharCode(102,117,110,99,116,105,111,110,32,99,111,110,118,101,114,116,40,101,41,123,114,101,116,117,114,110,32,101,46,114,101,112,108,97,99,101,40,47,60,47,103,44,34,38,108,116,59,34,41,46,114,101,112,108,97,99,101,40,47,62,47,103,44,34,38,103,116,59,34,41,125));

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
$("#loader").click(); auth.signInWithEmailAndPassword(($("#email").val()+"@chatty.com"),$("#pass").val()). catch(function(eer) {
  var error = eer.message;
    var ec= eer.code;
    authe(ec);
});
}
function sign_up(){
  $("#loader").click(); auth.createUserWithEmailAndPassword(($("#email").val()+"@chatty.com"),$("#pass").val()).catch(function(eer) {
  var error = eer.message;
    var ec= eer.code;
    authe(ec);
});
}

function user_list(){
$("ul").html(" ");
var n,u_n,u_p,u_e;
ref=firebase.database().ref().child('users').limitToLast(50);
      ref.on("child_added", function(snap) {
      var k=$("#email").val();
 n = snap.val();
     u_n=n.author;
     u_p=n.authorPic;
     u_e=n.email;
     if(u_e!=k){
 li= "<li><a href='#' name="+u_e+" onclick='newm(this)'><img class='l_p' src='https://api.sololearn.com/Uploads/Avatars/"+u_p+".jpg' />"+u_n+"</a></li>";
 $("ul").append(li);
 var src =  "https://api.sololearn.com/Uploads/Avatars/1.jpg";
 var img=$("img.l_p");
 img.on('load', function(e){  
  }).on('error', function(e) {
  $(this).attr("src",src); });
 }
});

 
}
function authe(ec){
    $("#hide_l").click();
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
function photo_update(e){
var user = firebase.auth().currentUser;
   var solo_id=prompt("Enter your Sololearn id","1");
if(solo_id!=null){ user.providerData.forEach(function (profile) {
var uid=profile.photoURL,username=profile.displayName,
 picture=solo_id;      
  writeNewPost(uid, username, picture);
$("img.avatar").attr("src","https://api.sololearn.com/Uploads/Avatars/"+solo_id+".jpg");
});}
}
function writeNewPost(uid, username,pic) {
  var postData = {
    author: username,
    email: uid,
    authorPic:pic, 
    starCount: 0
  };
  var updates = {};
  updates['/users/' + uid] = postData;
  return firebase.database().ref().update(updates);
}   
function name_update(e){
var user = firebase.auth().currentUser;
   var name=prompt("Enter your name");
    if(name!=null){user.updateProfile({ 
   displayName:name
}).then(function() {
$("#p_name").html(name);
}).catch(function(error) {
});}
  return name;
}
var user_info;
function newm(e){
    user_info=$(e).html()+"<br><br><button data-role='button' data-theme='a' onclick='s_new(this)' id="+$(e).attr("name")+"> Send Message </button>";
    alert(user_info,"#4AC75F");
}
var u_id,s,name,src,email,ref,m_sg,ap,k;
function s_new(e){
    $("#ap").html(" ");
    $("#ap").html(" ");
    k=$("#email").val();
    u_id=$(e).attr("id");
    firebase.database().ref('/users/'+u_id).once('value').then(function(snapshot) {
   s=snapshot.val();
   name=s.author;
   email=s.email;
   src=s.authorPic;
 src="https://api.sololearn.com/Uploads/Avatars/"+ src+".jpg";
   $("#n_user").html(name);
   $("#p_user").attr("src",src);
    });
   $("#body1").hide();
   $("#body2").show();
   $("#error").dialog( "close" );
   //msg_up(k,email);
   $("#send").click(function(){
   send_m(email);
   });
   var scroll=($(".msg-list").scrollTop())+1550; 
   ref=firebase.database().ref().child('msg');
   ref.on("child_added", function(snap) {
   n = snap.val();
   if(n.sender==email && n.receiver==k){
       m_sg=n.msg;
       ap="<div class='message from'>"+convert(m_sg)+"</div>";
       $("#ap").append(ap);
       $(".msg-list").scrollTop(155667);
   }else{
       if(n.sender==k && n.receiver==email){
       m_sg=n.msg;
  ap="<div class='message to'>"+convert(m_sg)+"</div>";
  $("#ap").append(ap);
  $(".msg-list").scrollTop(155667);
       }else{
           
       }
   }
   });
}
var rcvr_id,ref,k,msg;
function send_m(e){
    msg=$("#msg").val().trim();
    k=$("#email").val().trim();
    rcvr_id=e;
   ref=firebase.database().ref().child('msg');
   data={
       sender:k,
       receiver:rcvr_id,
       msg:msg, 
       read:0
   }
   if(msg!=""){
   var result=ref.push(data);
   $("#msg").val("");
   $(".msg-list").scrollTop(155667);
   }else{$("#msg").focus();}
}
$(function(){
     $("#back").click(function(){
       $("#body2").hide();
       $("#body1").show();
        $("#ap").html("");
        $("#ap").html("");
     });
     $("button#list").click(function(){
     user_list();
    });
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
          $("#type").html("Personal messaging system");
         $("#login_form").hide();
         $(".bar").css("margin-top","50px");
         $("#sign_out").show();
     var user = firebase.auth().currentUser;
   var k = $("#email").val().trim();
    user.updateProfile({photoURL:k})
if (user != null) {
  user.providerData.forEach(function (profile) {
var uid=k,username=(profile.displayName || name_update()); 
  var userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/users/'+k).once('value').then(function(snapshot) {
  var pic = (snapshot.val() && snapshot.val().authorPic) || prompt("Enter your Sololearn id",1); $("img.avatar").attr("src","https://api.sololearn.com/Uploads/Avatars/"+pic+".jpg");
 $("#p_name").html(username);
 user_list();
    $("#hide_l").click();
 writeNewPost(uid, username, pic);
 alert("Logged in as "+ username,"#4a6");
 
}); 
    
    if(profile.displayName==null || profile.photoURL==null){
name_update($("#email").val());
photo_update();
//photo_update($("#email").val());
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
$(document).on("click",".show-page-loading-msg",function(){var t=$(this),e=t.jqmData("theme")||$.mobile.loader.prototype.options.theme,o=(t.jqmData("msgtext")||$.mobile.loader.prototype.options.text,t.jqmData("textvisible")||$.mobile.loader.prototype.options.textVisible),i=!!t.jqmData("textonly");html=t.jqmData("html")||"",$.mobile.loading("show",{text:"Authenticating",textVisible:o,theme:e,textonly:i,html:html})}).on("click",".hide-page-loading-msg",function(){$.mobile.loading("hide")});                