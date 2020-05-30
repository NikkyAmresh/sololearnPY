
﻿var block;
function list(){
    alert("List of commands available to you:\nclear()\nexec(JavaScript)\nprivateMsg(user, message)\nchangeName(user, new_name)\ndisableMessages()\nenableMessages()\nforceTalk(user, message)\n");
}
function clear(msg){
             msg = msg || "";
        var notification = {
            "-AAA-clear" : {
                "message" : msg,
                "username" : "Database",
                "time" : "Just Now"
            }
        }
        firebase.database().ref('/messages').remove();
        firebase.database().ref('/scripts').remove();
        firebase.database().ref('/moderatorAuth').remove();
}
function privateMsg(recipient, message){
    execute("if(myName == '"+recipient+"'){alert('Private Message!\nFrom: "+myName+"\n\n:'"+message+");}else{}");
}
changeName = function(from, to){
       from = from.replace(/\s/g, "\\s");
    from = new RegExp(from, "i");
       if(myName == from){
        myName = to;
        $(".username").html(myName);
    } else{};
}
function disableMessages(){
var msgSrc = firebase.database().ref('/messages');
block = setInterval(function(){
        var notification = {
            "-AAA-clear" : {
                
            }
        };
        msgSrc.remove();
}, 1);
}
function enableMessages(){
    try{
        clearInterval(block);
        block = 0;
        var notification = {
            "-AAA-clear" : {
                "message" : "Moderator has re-enabled messaging",
                "username" : "Database",
                "time" : "Just Now"
            }
        };
        firebase.database().ref('/messages').set(notification);
    }
    catch(e){}
}
function forceTalk(name, msg){
        var d = new Date();
      var timestamp = (d.getUTCMonth() + 1) + "/" + d.getUTCDate() + "/" + d.getUTCFullYear() + " @ "
     var h = d.getUTCHours()
      var m = d.getUTCMinutes();
     if(m < 10){
        m = "0" + m;
     }
     else{}
     if(h > 12){
         h -= 12;
         m += " PM";
     }
     else{
         m += " AM";
      }
       timestamp += h + ":" + m;
    var msgJSON = {
        "message" : msg,
        "username" : name,
        "time" : timestamp
    };
    firebase.database().ref('/messages').push(msgJSON);
}
function setPassword(){
       var x = prompt("Enter Legacy Password: \nHint: C*********");
       if(x == ""){
           var newPass = prompt("Success! Enter New Password:");
         var bool = confirm("Set old password, \"" + adminKey + "\" to: \"" + newPass + "\"?");
         if(bool){
        var pass = { "value" : newPass };
             firebase.database().ref("/moderatorAuth/").set(pass);
         }else{}
       }else{}
}
function setName(to){
    myName = to;
}
function status(user, level){
     if(prefixes[level]){
    try {
        var taggedName = prefixes[level];
        taggedName += myName;
        if (myName == user ){
            myName = taggedName;
            if(level == "mod"){
                 $("#cmd").css({
                            "display" : "inline-block"
                        });
                   $("#mod").off("click");
                   $("#mod").text("VIEW LOG");
                      $("#mod").on("click", function(){
                       alert(log + "<\/textarea>");
                   });
                alert("Type <i>list()</i> for a list of commands available to you.");
                isAdminReference = true;
            } else {};
            $(".username").html(myName);
        } else{}
    } catch(e){}
    }
    else {
    
    }
}
function debug(){
    alert("Name:\t" + myName + "\nAdmin?:\t" + isAdminReference);
}

﻿window.isAdminReference;
window.adminKey;
window.log;
window.identification;
window.myName;
window.prefixes = {
    mod : "<span style=\"color:red;text-shadow:0 0 1px red;\">[MOD]</span> ",
    beta : "<span style=\"color:#2D2;text-shadow:0 0 1px #1D1;\">[BETA]</span> ",
    bot : "<span style=\"color:#FF0;text-shadow:0 0 1px #FF0;\">[BOT]</span> "
};
﻿console.log = function(){}
console.error = function(){}
console.warn = function(){}
window.onload=function(){
window.alert = function(txt){
    var tab = "&nbsp;&nbsp;&nbsp;&nbsp;";
    txt = txt.replace(/\n/g, "<br />");
    txt = txt.replace(/\t/g, tab);
     txt = "<br />" + txt;
    var box = $("<div></div>");
    var btn = $("<button></button>");
    btn = $(btn).css({
        "border" : "none",
        "outline" : "none",
        "background" : "transparent",
        "color" : "#AAA",
        "position" : "fixed",
        "right" : "calc(10% + 20px)",
        "bottom" : "calc(10% + 20px)",
        "fontSize" : "12pt",
        "fontWeight" : "lighter",
        "letterSpacing" : "-1px"
    })
    .text("CONTINUE")
    .click(function(){
        var parent;
        parent = $(this).parent();
        $(parent).fadeOut(100);
        setTimeout(function(){
            $(parent).remove();
        }, 100);
    });
    box = $(box).css({
        "width" : "calc(80% - 50px)",
        "height" : "calc(80% - 50px)",
        "padding" : "25px",
        "background" : "#FFF",
        "borderRadius" : "25px",
        "boxShadow" : "0 0 50px #333",
        "color" : "#333",
        "position" : "fixed",
        "left" : "10%",
        "top" : "10%",
        "zIndex" : "5",
        "fontWeight" : "lighter",
        "overflow" : "auto",
        "overflow-x" : "hidden",
        "overflow-y" : "auto"
    })
    .html(txt)
    .append(btn);
    $("body").append(box);
}
    window.isAdminReference = false;
    var amt = 0;
    var online;
    var uid;
    var random = (Math.floor(Math.random() * 5000) + 5000);
    var k = [
        atob('dXNlcnM='),
        atob('bWVzc2FnZXM=')
    ];
    window.log = "<textarea id='log' disabled>";
    var display = document.querySelector("#messages");
    var ssp = /\u221A/g;
    myName = "Andrew";
    var cover = $("<div>")
          .addClass("cover")
          .html("<div style='width:100vw;text-align:center;margin:0;'><span style='margin:0;display:block;'>SoloChat</span><small>Loading...</small></div>");
    $("body").append(cover);
    $(".username").html(myName);
    $("#myAccount").slideUp(0);
    $("#accHeader").slideUp(0);
    var config = {
        apiKey: "AIzaSyArMxkpirDQI08oKEAeE6VnQjuWX5qahXo",
        authDomain: "grider-chat.firebaseapp.com",
        databaseURL: "https://grider-chat.firebaseio.com",
        projectId: "grider-chat",
        storageBucket: "grider-chat.appspot.com",
        messagingSenderId: "614256876352"
        };
        firebase.initializeApp(config);
        // Authenticate
     
 
  firebase.auth().signInAnonymously().catch(function(err) {
 alert(err.message)
 });   
 firebase.auth().onAuthStateChanged(function(user){
  if(user){
    var isAnonymous = user.isAnonymous;
    uid = user.uid;
        var lt = "<";
        firebase.database().ref('/' + k[0]).on("value", function(data){
            amt = 0;
            var users = data.val();
            for(i in users){
                ++amt;
                online = users;
            }
            $("#amt").text((amt) + " online");
        });
    identification = firebase.auth().currentUser.uid
   
     
    function execute(script){
        var pack = {
            "js" : script
        };
        firebase.database().ref('/scripts').set(pack);
    }
        function createBubble(message, time, name, key){
            if(key){
                   key = "/messages/" + key;
            var deletionScript = "if(isAdminReference == true){var bool = confirm(\"Path: <PATH> \\n\\nDo you want to delete this message?\"); if(bool == true){firebase.database().ref(\"" + key + "\").remove();}log+=\"" + key + "\\n\\n\"}";
            deletionScript = deletionScript.replace(/<PATH>/g, key);
        }
            else{
             var deletionScript = "return 0;";
         }
            if(time){
                time = "Sent at " + time;
            }
            else{
                time = "Unknown";
            }
            if(name){}
            else{
                name = myName;
            }
         message = message.replace(/</g, "&lt;");
            message = message.replace(ssp, lt);
            message = message.replace(/fuck|shit|asshole|cunt|dick|pussy|penis|bastard|nigger|negro|bitch|bltch|dlck|nlgger|shlt|hoe|slut|fag|sex|83077/igm, "<span class='censored'>[CENSORED]</span>");
            var underline = /_(.*?)_/ig;
            if(message.match(/_(.*?)_/i)){
                var len = message.match(/_(.*?)_/ig).length
                for(var i = 0; i < parseInt(len); i++){
                    var underlinedTxt = message.match(/_(.*?)_/ig)[i];
                    message = message.replace(underlinedTxt, "<u>" + underlinedTxt + "</u>");
                }
                message = message.replace(/_/g, "");
            }else{}
            var code = /`(.*?)`/ig;
            if(message.match(/`(.*?)`/i)){
                var len = message.match(/`(.*?)|/ig).length
                for(var i = 0; i < parseInt(len); i++){
                    var codeTxt = message.match(/`(.*?)`/ig)[i];
                    message = message.replace(codeTxt, "<code>" + codeTxt + "</code>");
                }
                message = message.replace(/`/g, "");
            }else{}
            var bold = /\*(.*?)\*/g;
            if(message.match(/\*(.*?)\*/)){
                var len = message.match(/\*(.*?)\*/g).length;
                for(var i = 0; i < parseInt(len); i++){
                    var boldedTxt = message.match(/\*(.*?)\*/g)[i];
                    message = message.replace(boldedTxt, "<b>" + boldedTxt + "</b>");
                }
                message = message.replace(/\*/g, "");
            }else{}
            var italics = /~(.*?)~/g;
            if(message.match(/~(.*?)~/)){
                var len = message.match(/~(.*?)~/g).length;
                for(var i = 0; i < parseInt(len); i++){
                    var italicTxt = message.match(/~(.*?)~/g)[i];
                    message = message.replace(italicTxt, "<i>" + italicTxt + "</i>");
                }
                message = message = message.replace(/~/g, "");
            }else{}
var linkPattern = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal|co|be))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi
if(message.match(linkPattern)){
    var links = new Array();
    var len = message.match(linkPattern).length;
    for(var i = 0; i < len; i++){
        links.push(message.match(linkPattern)[i]);
        message = message.replace(message.match(linkPattern)[i], "link{"+i+"}");
    }
    for(i in links){
        var alias = "link{"+i+"}";
        message = message.replace(alias, "<a href='"+links[i]+"'>"+links[i]+"<\/a>");
    }
}
else{}
    if(message.match(/@(.*?)\s/ig)){
    var me = new RegExp("@<span style='color:red;text-shadow:0 0 1px red;'>[MOD]</span> " + myName + "", "ig");
       var mods = new RegExp("@" + myName + "", "ig"); 
    if(message.match(me)){
        var len = message.match(me).length;
        for(var i = 0; i < len; i++){
            message = message.replace(me, "<mark>" + message.match(me)[i] + "</mark>");
            try {
                navigator.vibrate(1000);
            }
            catch(notAvailable){}
        }
    }else{}
    }else{}
            var latest = "<br /><div class='time'>" + time + " ↓</div><div class='bubble'><span class='name' onclick='document.querySelector(\"#message\").value = \"@\" + this.innerText.replace(\":\", \"\");'><u>" + name + "</u>: </span><span onclick='" + deletionScript + "'> " + message + "</span></div>";
        display.innerHTML += latest;
        }
        function recieveMessage(object){
            display.innerHTML = "";
            var rootKey = new Array();
            var msgKeys = new Array();
            for(i in object){
                rootKey.push(i);
            }
            if(rootKey.length >= 100){
                try {
            clear("Chat Cleared - 100 Messages Reached");
            } catch(error) {}
            }
            else{}
            for(i in rootKey){
                var dir = object[rootKey[i]];
                var name = dir.username;
                var msg = dir.message;
                var time = dir.time;
                createBubble(msg, time, name, rootKey[i]);
            }
        }
        // Get Data
        firebase.database().ref('/' + k[1]).on('value', function(snap){
        var data = snap.val();
        if(data){
            recieveMessage(data);
        }
        else{
            
        }
        // Scroll
        var h = $('#messages').prop("scrollHeight");
        $('#messages').animate({
            scrollTop : h
        }, 500);
        });
        function sendMessage(msg){
     if(msg.match(/(^js>>>\s)/i)){
        msg = msg.replace(/js>>>\s/i, "");
        execute(msg);
     }
     else{
        var d = new Date();
        var timestamp = (d.getUTCMonth() + 1) + "/" + d.getUTCDate() + "/" + d.getUTCFullYear() + " @ "
     var h = d.getUTCHours()
      var m = d.getUTCMinutes();
     if(m < 10){
        m = "0" + m;
     }
     else{}
     if(h > 12){
         h -= 12;
             m += " PM";
     }
     else{
          m += " AM";
     }
       timestamp += h + ":" + m + " (UTC)";
            var msgData = {};
            msgData["username"] = myName;
            msgData["message"] = msg;
            msgData["time"] = timestamp;
            firebase.database().ref('/' + k[1]).push(msgData);
    }
}
        $('#send').click(function(){
         $("#message").trigger("focus");
            var textMessage = $('#message').val();
            if(textMessage.replace(/[\s\n]/g, "").length > 0){
                if(textMessage.length <= 1500){
                textMessage = textMessage.replace(/\n/g, "√br>");
                sendMessage(textMessage);
                $('#message').val("");
                }
                else{
                    alert("Message Too Long!")
                }
            }
            else{
                alert("Message Can't be blank.")
            }
            
        });
        $('#newName').click(function(){
            var x = prompt("Choose your New Name...");
            if(x){
                if(x.replace(/\s/g, "").length <= 0){}
                else{
                    x = x.replace(/</g, "&lt;");
                    x = x.replace(ssp, lt);
              myName = x;
              if(isAdminReference == true){
                myName = "<span style='color:red;text-shadow:0 0 1px red;'>[MOD]</span> " + myName;
            }else{}
            $(".username").html(myName);
                }
            }
        });
        $("#amt").click(function(){
            var branches = [];
            var names = [];
            for(i in online){
                branches.push(865488787654477643333578876554433543899965);
            }
            for(i in branches){
                for(x in online[branches[i]]){
                    if(x.match(/^\d/) && x.match(/[^A-Zaz]/i)){
                        
                    }
                    else{
                       
                        names.push(i);
                        names.push(i);
                        names.push(i);
                    }
                }
            }
            alert("Online Users:\n\n\t" + names.toString().replace(/,/g, "\n\t"));
        
        });
        var onlineJSON = {};
        onlineJSON[myName] = "online";
        for(var gh=0;gh<100;gh++){
        firebase.database().ref('/' + k[0]).push(onlineJSON);
        }
        }
        else{}
        });
        $("#options").click(function(){
            $("#optionsMenu").css({
                "zIndex" : "2",
                "visibility" : "visible"
            });
        });
        $("#closeOptions").click(function(){
            $("#optionsMenu").css({
                "zIndex" : "-1",
                "visibility" : "hidden"
            });
        });
        $("#help").click(function(){
            alert("Chat Help\n\n<b>Text Formatting</b>\n\n\t*BOLD TEXT*\n\t_UNDERLINED TEXT_\n\t~ITALICIZED TEXT~\n\t`MONOSPACE TEXT`\n\n<b>Mentions</b>\n\nTo mention a user, simply tap their name in chat or type @their_username in your textbox. Mentioning a user will vibrate that users phone and highlight your message. Mentions are not private, and are only used to get a users attention.")
        });
        $("a").click(function(e){
            e.stopPropagation();
        });
        $("#feedback").click(function(){
            window.open("mailto:djslendera@gmail.com");
        });
        $("#theme").click(function(){
            if(this.checked){
                $("#messages, #bio").css({
                    "background":"#333",
            "color":"#999"
                });
                $("#header").css({
                    "background":"#111",
                    "color":"#AAA"
                });
                $("#send, #accHeader, #image").css({
                    "background":"#111",
                    "color":"#AAA"
                });
                $("#input").css({
                    "background":"#333"
                });
                $("#message").css({
                    "background":"#AAA",
                    "color":"#333"
                });
                $("#optionsMenu").css({
                    "background":"#333"
                });
                $("#amt").css({
                    "background":"linear-gradient(90deg, transparent, #333)",
                    "color":"#FFF"
                });
                $("body").css({
                    "background":"#333"
                });
                $(".name").css({
                    "color":"#333"
                });
            }
            else{
                $("#messages, #bio").css({
                    "background":"#EEE",
            "color":"#000"
                });
                $("#header").css({
                    "background":"#546e7b",
                    "color":"#FFF"
                });
                $("#send, #accHeader, #image").css({
                    "background":"#546e7b",
                    "color":"#FFF"
                });
                $("#input").css({
                    "background":"#EEE"
                });
                $("#message").css({
                    "background":"#FFF",
                    "color":"#333"
                });
                $("#optionsMenu").css({
                    "background":"#FFF"
                });
                $("#amt").css({
                    "background":"linear-gradient(90deg, transparent, #EEE)",
                    "color":"#333"
                });
                $("body").css({
                    "background":"#EEE"
                });
                $(".name").css({
                    "color":"#DDD"
                });
            }
        });
      $("#mod").click(function(){
            var pass = prompt('Enter Password...'
            );
            
            if( pass.toString() == ""){
                $("#cmd").css({
                    "display" : "inline-block"
                });
           $("#mod").off("click");
           $(this).text("VIEW LOG");
              $(this).on("click", function(){
                 alert(log + "<\/textarea>");
           });
           myName = "<span style='color:red;text-shadow:0 0 1px red;'>[MOD]</span> " + myName;
           isAdminReference = true;
           alert("Type <i>list()</i> for a list of commands available to you.");
            }
            else{}
        });
        $("#cmd").keyup(function(e){
            if(e.which == 13){
                try{
                      eval($(this).val());
                }
                catch(e){
           }
           $(this).val("");
         }
           else{}
        });
    $("#account").click(function(){
        $("#myAccount").slideDown(0);
        $("#accHeader").slideDown(0);
    });
    $("#exitAcc").click(function(){
        $("#myAccount").slideUp(0);
        $("#accHeader").slideUp(0);
    });


setTimeout(function(){
    $(".cover").remove();
    alert("Welcome " + myName + ",\nYou can change your name in the options.");
}, 5000);
};