function ipton(a){
    var x="";
    for(var i=0;i<a.length;i++){
        if(!isNaN(a[i])){
            x=x+a[i];
        }
    }
    return x;
}
var usrid="";
// Get a reference to the database service
var database = firebase.database();

$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
    $("#uidd").val(ipton(data["ip"]))
  createuser(ipton(data["ip"]));  
 })

 function createuser(usrid){
 email=usrid+"@sqlpoll.com";
firebase.auth().createUserWithEmailAndPassword(email,usrid).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  
    if (errorCode === 'auth/email-already-in-use') {
    signin(usrid);
      
  } else {
    console.log(errorMessage);
    
    }
    
 })
}
/*




 */
function signin(usrid){
   email=usrid+"@sqlpoll.com"; firebase.auth().signInWithEmailAndPassword(email,usrid).then(function(){
      // console.log(usrid);
   })
}
 
 function userlist(uid, username,pic) {
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

firebase.auth().onAuthStateChanged(function(user){
         if(user){ 
     var user = firebase.auth().currentUser;
   var k = $("#uidd").val();
    user.updateProfile({photoURL:k})
if (user != null) {
  user.providerData.forEach(function (profile) {
var userId = firebase.auth().currentUser.uid;
var uid=userId,username=(profile.displayName || name_update()); 
  var userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/users/'+userId).once('value').then(function(snapshot) {
  var pic = (snapshot.val() && snapshot.val().authorPic) || prompt("Enter your Sololearn id","3198027");
if(pic==null || pic==""){pic=="3198027"} $("img.avatar").attr("src","https://api.sololearn.com/Uploads/Avatars/"+pic+".jpg");
$("img.me_p").attr("src","https://api.sololearn.com/Uploads/Avatars/"+pic+".jpg");
 $("#p_name").html(username);
 //user_list();
    $("#hide_l").click();
 writeNewPost(uid, username, pic);
 $("#ap").val(pic);
 $("#nm").val(username);
 alert("Logged 1 in as "+ username,"#4a6");
 
}); 
    
    if(profile.displayName==null || profile.photoURL==null){
name_update($("#email").val());
photo_update();
//photo_update($("#email").val());
}else{
    user.providerData.forEach(function (profile) {var name5=profile.displayName;
            alert("Logged in as 2 "+ name5,"#4a6");
             $("#nm").val(name5);
            });
}
  });
}}
            else{
             
            }
          }); 
 
 
function photo_update(e){
var user = firebase.auth().currentUser;
   var solo_id=prompt("Enter your Sololearn id","3198027");
   if (solo_id==null || solo_id==""){solo_id="3198027"}
if(solo_id!=null){ user.providerData.forEach(function (profile) {
var userId = firebase.auth().currentUser.uid;
var uid=userId,username=profile.displayName,
 picture=solo_id;      
  writeNewPost(uid, username, picture);
});}
}
function writeNewPost(uid, username,pic) {
  var postData = {
    author: username,
    email: uid,
    authorPic:pic
  };
  var updates = {};
  updates['/users/' + uid] = postData;
  return firebase.database().ref().update(updates);
}   
function name_update(e){
var user = firebase.auth().currentUser;
   var name=prompt("Enter your name");
    var rand=Math.floor(Math.random()*1000)+9000;
    if(name==null || name==""){ name="User"+rand}
    if(name!=null){user.updateProfile({ 
   displayName:name
}).then(function() {

alert("Logged 3 in as "+ name5,"#4a6");
//$("#ap").val(pic);
 $("#nm").val(name5);
}).catch(function(error) {
});}
  return name;
}

function vote(a){
    var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/vote/' + userId).once('value').then(function(snapshot) {
  var vot = (snapshot.val() && snapshot.val().vote);
  if(vot==null){ wrv(a)
  }else{
  console.log("already voted as "+ vot)
  };
});
}
function wrv(a,aor,pic,uid){
    var postData = {
    vote : a
  };
  var updates = {};
  updates['/vote/' + uid] = postData;
console.log("new voted as "+a) ;
  return firebase.database().ref().update(updates);
    
}
//
