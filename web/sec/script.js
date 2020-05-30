window.onload=function(){
    window.global = {}; 
    window.account = {};
    var config = {
    apiKey: "AIzaSyAIFL3k6xLBRtr5OzJOoCx0OkKVFhpAtrc",
    authDomain: "griderly.firebaseapp.com",
    databaseURL: "https://griderly.firebaseio.com",
    projectId: "griderly",
    storageBucket: "griderly.appspot.com",
    messagingSenderId: "1060197907865"
  };
  firebase.initializeApp(config);
  function goHome(){
      $("#content").html("");
  }
  function setupMainAfterLogin(){
      var postBodyBox = $("<textarea>")
        .attr("id", "newPostBody")
        .attr("placeholder", "Type a new post...");
      var addPostBtn = $("<button>")
        .attr("id", "newPost")
        .text("Post")
        .on("click", function(){
            var msg = $("#newPostBody").val();
            var d = new Date();
            var time = d.toLocaleTimeString();
            post(msg, time);
        });
      var createPostWrapper = $("<div>")
        .attr("id", "createPost")
        .append(postBodyBox)
        .append("<br />")
        .append(addPostBtn);
      $("#content").append(createPostWrapper);
  }
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    
  } else {
    // Offline
    firebase.auth().signOut();
  }
});
  window.authError = function(txt){
      txt = txt || "Incorrect user credentials. Please make sure everything is spelled correctly.";
      $("#loginErrors").text(txt);
  };
  window.post = function(message, time){
      var newPost = {
          "message" : message,
          "time" : time,
          "user" : window.account.username,
          "pic" : window.account.picture
      };
      firebase.database().ref('/posts/').push(newPost);
  };
  function login(email, password){
      var login = true;
      var uid;
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        uid = user.uid;
        firebase.database().ref('/users/' + uid).once('value').then(function(userData) {
            var data = userData.val();
                firebase.auth().currentUser.updateProfile({
                    displayName: data.username || "Error"
                });
                window.account.username = data.username;
                window.account.email = data.email;
                window.account.picture = data.img || "default.svg";
                window.account.uid = uid;
            });
            goHome();
            setupMainAfterLogin();
            firebase.database().ref("/posts/").on("value", function(data){
               var posts = data.val();
               goHome();
               setupMainAfterLogin();
               for(queries in posts){
                   var post = posts[queries];
                   var postId = queries;
                   var poster = post.user;
                   var time = post.time;
                   var msg = post.message;
                   var pict = post.pic;
      var top = "<div class='postTop'><img src='" + pict + "' class='userpic' /><p class='name'>" + poster + "</p></div><small class='time'>" + time + "</small>";
      var body = "<div class='postBody'>" + msg.replace(/</g, "&lt;") + "</div>";
      var display = "<div class='post' id='" + postId + "'>" + top + "<hr class='postBorder' />" + body + "</div>";
      var recent = $("#content").children().eq(0);
      $(recent).after("<br />");
      $(recent).after(display);
               }
            });
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode == "auth/wrong-password"){
            authError("Incorrect Username or Password");
        }
        else{
            authError(errorMessage);
        }
        login = false;
      });
  }
  function register(email, password, username){
      var error = false;
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
          firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
              var usr = firebase.auth().currentUser;
              usr.sendEmailVerification().then(function() {
                // Email sent.
               $("#content").html("Please confirm your email.");
              }).catch(function(error) {
                // An error happened.
              });
              var uid = user.uid
          var JSONAccount = {
                "email" : email,
                "username" : username,
                "password" : password
            };
          firebase.database().ref('users/' + uid).set(JSONAccount);
          }).catch(function(err){
              
          });
     }).catch(function(error) {
        
     });
      /*
        firebase.auth().signInAnonymously().catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
     */
  }
  
  
  
  
  // Handle Events
  $("#loginBtn").click(function(){
     var email = $("#email").val();
     var pass = $("#password").val(); 
     login(email, pass);
  });
  $("#registerBtn").click(function(){
      var registry = $("<div>");
      var confirmPass = $("<input type='password' />")
        .attr("id", "confirmPass")
        .attr("placeholder", "Confirm Password")
        .addClass("logins");
      registry = $(registry).append(confirmPass);
      var username = $("<input type='text' />")
        .attr("id", "username")
        .attr("placeholder", "Username")
        .addClass("logins");
      registry = $(registry).append(username);
      registry = $(registry).append("<br />");
      var create = $("<button>")
        .attr("id", "create")
        .text("Create")
        .on("click", function(){
            var pass = $("#password").val();
            var confirmPassword = $("#confirmPass").val();
            var email = $("#email").val();
            var username = $("#username").val();
            if(pass === confirmPassword){
                register(email, pass, username);
            }
            else {
                $("#loginErrors").text("Passwords do no match!");
            }
        });
      registry = $(registry).append(create);
      $('#login').append(registry);
      $("#registerBtn, #loginBtn").remove();
      $("#forgotPass").parent().remove();
  });
  $("#logout").click(function(){
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        location.reload();
      }).catch(function(error) {
        alert(error);
      });
  });
  $("#reload").click(function(){
      location.reload();
  });
  $("#top").click(function(){
      window.open("http://www.editey.com/preview/0B5s0rgBaTdSjdHFPZDc4UjdpaVE/index.html?pe=djslendera@gmail.com");
  });
  $("#forgotPass").click(function(e){
      e.preventDefault();
      $("#login").html("");
      var email = $("<input tpye='email' />")
        .attr("id", "resetEmailAddr")
        .attr("placeholder", "Enter your email...")
        .addClass("logins");
      var sendReset = $("<button>")
        .on("click", function(){
            var auth = firebase.auth();
            var emailAddress = $("#resetEmailAddr").val();
            auth.sendPasswordResetEmail(emailAddress).then(function() {
                // Email sent.
            }).catch(function(error) {
                authError(error.message);
            });
      })
      .addClass("btn")
      .text("Send Reset");
      $("#login").append("<p id='loginErrors'></p>");
      $("#login").append(email);
      $("#login").append("<br />");
      $("#login").append(sendReset);
  });
  $("*").on("contextmenu", function(e){
     e.preventDefault(); 
  });
  $(document).on("keydown", function(e){
      if(e.ctrlKey){
          e.preventDefault();
          e.stopPropagation();
      }
      else{}
  });
};