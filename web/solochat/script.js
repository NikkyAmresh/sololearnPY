function cont(c){
    $("#ccode").attr("value","+"+c);
}
$(function(){

    var tick="<svg style='position: absolute;transition: .5s ease-in-out;' xmlns='http://www.w3.org/2000/svg' width='16'height='15' id='msg-dblcheck-ack' x='2063' y='2076'><path d='M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z' fill='#4fc3f7'/></svg>";
$(".tick").html(tick);
var config = {
    apiKey: "AIzaSyBW00WzgHUckAcABP_1paQH3JVEgE1kQ70",
    authDomain: "solo-group-chat.firebaseapp.com",
    databaseURL: "https://solo-group-chat.firebaseio.com",
    projectId: "solo-group-chat",
    storageBucket: "solo-group-chat.appspot.com",
    messagingSenderId: "43690449074"
  };
  firebase.initializeApp(config);
  database = firebase.database();
    var email=$("#email");
    var pass=$("#pass");
    const btnlogin=$("#btnlogin");
    const btnsp=$("#btnsp");
    const login=$("#login");
    const logout=$("#logout");
    const secure=$("#secure");
    const list=$("#list");
    const msg=$("#msg");
    const send=$("#send");
    const em=$("#error");
    function errm(err,color="red"){
    em.html(err);
    em.css("background-color",color)
    em.fadeIn(1000);
    em.fadeOut(2000);
    }
    btnlogin.click(function(){
    if($("#email").val()==""){
        $("#email").focus();
        errm("Enter your phone number");
    }
    else if(pass.val().length<=5){
        pass.focus();
        errm("Password too short" );
    }
      else{
      const auth = firebase.auth();
      email=$("#ccode").val()+$("#email").val()+"@sologroupchat.com";
      var username = $("#ccode").val()+$("#email").val();
firebase.auth().signInWithEmailAndPassword(email,pass.val())
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
    errm('Wrong password.');
  } else
 {
    if(error.code==="auth/invalid-email"){
        errm("Invalid phone number");
         
    }
    else{
    if(error.code==="auth/user-not-found"){
        errm("phone number not registered");
    }else{
    errm(errorCode);
    }
  }}
  });}
});
    
    btnsp.click(function(){
    if($("#ccode").val()+$("#email").val().length<=7){
        $("#email").focus();
        errm("Invalid phone number");
    }
    else if(pass.val().length<=5){
        pass.focus();
        errm("Password too short");
    }
      else{
      const auth = firebase.auth();
      var username = $("#ccode").val()+$("#email").val();
      email=$("#ccode").val()+$("#email").val()+"@sologroupchat.com";
firebase.auth().createUserWithEmailAndPassword(email,pass.val())
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  
    if (errorCode === 'auth/email-already-in-use') {
    errm('phone number already exists');
      
  } else {
    errm(errorCode);
    
  }
});}
    });
logout.click(function(){
    
firebase.auth().signOut().then(function() {
  errm("successful sign out","#4AC75F");
   
}).catch(function(error) {
  errm(error.message);
   
});
})

    firebase.auth().onAuthStateChanged(
        firebaseUser =>{
            if(firebaseUser){
        var scroll=1;
        var userc = "2";
        $(".status").html(userc+" user(s) online");
        var h=document.getElementById('list');
     var g=firebase.database().ref().child('msg').limitToLast(20);;
g.on('child_added', snap =>{
    var me = snap.child("m").val();
    var uname = snap.child("author").val();
    var timee = snap.child("time").val();
    scroll=($(".conversation-container").scrollTop())+1550; eval(String.fromCharCode(102,117,110,99,116,105,111,110,32,99,111,110,118,101,114,116,40,101,41,123,114,101,116,117,114,110,32,101,46,114,101,112,108,97,99,101,40,47,60,47,103,44,34,38,108,116,59,34,41,46,114,101,112,108,97,99,101,40,47,62,47,103,44,34,38,103,116,59,34,41,125));
 var para;
 if(uname==username){
 para = "<div class='message sent'>"+convert(me)+"<span class='metadata'> <span class='time'>"+timee+"</span><span class='tick'>"+tick+"</span></span></div>";
    }else{
    para ="<div class='message received'><span align='left' style='font-size:12px;color:#a33'>"+uname+"</span><br>"+convert(me)+"<span class='metadata'> <span class='time'>"+timee+"</span>";
    }
  $("#ap").append(para);
});
  var userId = firebase.auth().currentUser.uid;
            secure.show();
            $("#user").html("<br>login as: "+email);
            login.hide();
            var username = $("#ccode").val()+$("#email").val();
            $("#email").val("");
            pass.val("");
            errm("SignIn as "+username ,"#4AC75F");
            send.click(function(m){
                var m=$("#msg").val().trim();
                $("#msg").val("");
  $(".conversation-container").scrollTop(scroll);
                if(m==""){
                  $("#msg").focus();
                }else{
         var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();
 10>h?h="0"+h:h=h;
 10>t?t="0"+t:t=t;
 12>h?time=h+":"+t+" am":time=(h-12)+":"+t+" pm";  
            var data = {
           m: m, 
           author : username, 
           time : time
           }
         
        var ref = database.ref('msg');
        var result = ref.push(data);}
            });
            }
            else{
            login.show();
            secure.hide();
            }
            
        }
    )
 });
