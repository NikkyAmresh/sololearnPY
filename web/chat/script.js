var config = {
    apiKey: "AIzaSyDNHeyNDAM8aub45Wc39AilE91pzGzycb4",
    authDomain: "chatty-app-test.firebaseapp.com",
    databaseURL: "https://chatty-app-test.firebaseio.com",
    projectId: "chatty-app-test",
    storageBucket: "",
    messagingSenderId: "149800421780"
  };
  firebase.initializeApp(config);
$(function(){
    $("#pass").focus(function(){
        hidebtn();
    });
    $("#email").focus(function(){
        hidebtn();
    });
    $("#email").focusout(function(){
        showbtn();
    });
    $("#pass").focusout(function(){
        showbtn();
    });
    $("#login").click(function(){
        login();
    });
});
function hidebtn(){
    $("#btnlogin").hide();
    $("#btnsp").hide();
}
function showbtn(){
     $("#btnlogin").show();
    $("#btnsp").show();
}
