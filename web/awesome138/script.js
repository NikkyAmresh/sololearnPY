// Created by LukArToDo

var username="";
var email="";
var pass="";
var counter=0;
var mapName= new Map();
var mapEmail= new Map();


/******************************/
/****** DISPLAY CHANGE ********/
/******************************/

function openSign() {
    document.getElementById("containerSign").style.width = "85%";
    document.getElementById("sideSign").style.display = "none";
    document.getElementById("containerReg").style.left = "85%";
    document.getElementById("containerReg").style.width = "15%";
    $("#sideReg").fadeIn(500);
    document.getElementById("reg").style.display = "none";
    document.getElementById("okReg").style.display = "none";
    document.getElementById("sign").style.display = "block";
    document.getElementById("mfr").reset();
    document.getElementById("btnMusic").style.left = "82%";  
    counter=0;
    document.getElementById("final").style.display = "none";
   
}

function openReg() {
    document.getElementById("containerSign").style.width = "15%";
    $("#sideSign").fadeIn(500);
    document.getElementById("containerReg").style.left = "15%";
    document.getElementById("containerReg").style.width = "85%";
    document.getElementById("sideReg").style.display = "none";
    document.getElementById("reg").style.display = "block";
    document.getElementById("sign").style.display = "none";
    document.getElementById("mfs").reset();
    document.getElementById("btnMusic").style.left = "0";
 
}



/******************************/
/** REGISTER (valid.&storage) */
/******************************/

function getData(){
    username= $("#nameR").val().trim();
    email= $("#userR").val().trim();
    pass= $("#passR").val();
    if (username.trim()==="" || ifExistUser(username)){
        swal({ title: 'Opss..', text: 'You forgot your username or it already exists!', type: 'warning', showCancelButton: false, showConfirmButton:false, timer: 2500 });
        setTimeout(function(){
         $("#nameR").val("").focus();
        },2500);
    }
    else if (!validateEmail(email)|| ifExistEmail(email)) {
        swal({ title: 'Opss..', text: 'Your email is incorrect or already exists!', type: 'warning', showCancelButton: false, showConfirmButton:false, timer: 2500 });
        setTimeout(function(){
         $("#userR").val("").focus();
        },2500);
       
    }
    else if (pass.trim()==="" || mapName.has(pass)){
    swal({ title: 'Opss..', text: 'You forgot password or it already exists!', type: 'warning', showCancelButton: false, showConfirmButton:false, timer: 2500 });
        setTimeout(function(){
         $("#passR").val("").focus();
        },2500);
        
    }
    else{
        mapName.set(pass,username);
        mapEmail.set(pass,email);
    $("#reg").fadeOut(500);
    $("#okReg").fadeIn(500);
    setTimeout(function(){
    $("#okReg").fadeOut(500);
    openSign();
}, 1500);
        
    }
     return false;
}

function ifExistUser(username){
    var bol=false;
    for (var user of mapName.values()){
        if (user===username) bol=true;
    }
    return bol;
        
}

function ifExistEmail(email){
    var bol=false;
    for (var user of mapEmail.values()){
        if (user===email) bol=true;
    }
    return bol;
        
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

/******************************/
/** SIGN IN (data validation) */
/******************************/

function signIn(){
    counter++;
    var sUserEmail="";
    var sPass="";
    sUserEmail= $("#userS").val().trim();
    sPass= $("#passS").val();
    
    if (sUserEmail.trim()!=="" && sPass.trim()!=="") {
        if (mapName.has(sPass)&&((mapName.get(sPass)===sUserEmail || mapEmail.get(sPass)===sUserEmail))) {
            counter=0;
            openFinal(mapName.get(sPass));
        } else {
            setCounter();
        }
        
    } else {
       setCounter();
    }      
          return false;
  
    }
    
function setCounter(){
    if (counter>2) {
        counter=0;
        $("#sign").fadeOut(500);
        $("#okSign").fadeIn(500);
        setTimeout(function(){
            $("#okSign").fadeOut(500);
            openReg();
            }, 1500);
          
    } else {
        swal({ title: 'Opss..', text: 'Your username/email or password is incorrect. Try again!', type: 'warning', showCancelButton: false, showConfirmButton:false, timer: 2500 });
        setTimeout(function(){
            $("#passS").val("");
            $("#userS").val("").focus();
        },2500);
       
    }
} 
    

/******************************/
/**** OPEN FINAL WINDOW *******/
/******************************/

function openFinal(username){
   document.getElementById("mfs").reset();
   $("#final").slideToggle(900);
    $("#containerSign").fadeOut(1000);
    $("#containerReg").fadeOut(1000);
   

/***************************/    
/********* MESSAGE *********/
/***************************/
    
    $("#msgLogo").on("click",function (){
    document.getElementById("msgBox").style="z-index:3; height:98%; width:98%;"
    setTimeout(function(){
    document.getElementById("closeBtn").style.display="block";
    $("#msgLogo").fadeOut(500);
    },1000);
    setTimeout(function(){
$('#t').fadeIn();
$('#text').typeIt({
speed: 80,
autoStart: false,
cursor:false
})
.tiPause(1500)
.tiType('Hey')
.tiPause(500)
.tiSettings({speed: 100})
.tiDelete(2)
.tiType('ello '+username+', ')
.tiBreak() .tiPause(1000)
.tiSettings({speed: 80})
.tiType('I guess I should say something to welcome...')
.tiPause(750)
.tiType('but I don\'t really know what to say.')
.tiPause(2000)
.tiSettings({speed: 50})
.tiEmpty()
.tiPause(150)
.tiSettings({speed: 100})
.tiType('Maybe something like')
.tiSettings({speed: 700})
.tiType('...')
.tiPause(1500)
.tiSettings({speed: 150})
.tiDelete()
.tiSettings({speed: 80})
.tiType('Dear Sololearns,')
.tiPause(1000)
.tiSettings({speed: 100})
.tiDelete(11)
.tiType('developers,')
.tiPause(1500)
.tiSettings({speed: 80})
.tiDelete()
.tiPause(1500)
.tiSettings({speed: 200})
.tiType('Actually')
.tiSettings({speed: 700})
.tiType('...')
.tiPause(1500)
.tiSettings({speed: 50})
.tiDelete()                 
.tiPause(1500)
.tiSettings({speed:100})
.tiType('Instead of the welcome</br>I will share with you some quotes and smart codes.')
.tiPause(1500)
.tiSettings({speed: 50})
.tiEmpty()
.tiPause(1000)
.tiSettings({speed: 80})
.tiType('</br></br></br><p>//:I WOULD THE CHANGE WORLD</p> ') 
.tiType('<p id="p1"> BUT THEY WON\'T GIVE ME THE SOURCE CODE...</p> ')
.tiPause(1500)
.tiSettings({speed: 50})
.tiDelete()                 
.tiPause(1000)
.tiSettings({speed: 80})
.tiType('</br></br><p>TALK IS CHEAP</p> ') 
.tiType('<p>SHOW ME THE</p>') 
.tiType('<p> \x3C / CODE \x3E </p>') 
.tiPause(1500)
.tiSettings({speed: 50})
.tiDelete()
.tiPause(1000)
.tiType('</br></br><p>while(noSuccess)</p> ') 
.tiType('<p>{</p>')
.tiType('<p>tryAgain();</p>')
.tiType('<p>if(Dead)</p>')
.tiType('<p>break;</p>')
.tiType('<p>}</p>')
.tiPause(1500)
.tiSettings({speed: 50})
.tiDelete()              
.tiPause(1000)
.tiSettings({speed: 100})
.tiType('</br></br><p>while(alive){</p> ') 
.tiType('<p>eat();</p>')
.tiType('<p>sleep();</p>')
.tiType('<p>code();</p>')
.tiType('<p>repeat();</p>')
.tiType('<p>}</p>')
.tiPause(1500)
.tiSettings({speed: 50})
.tiDelete()
.tiPause(1000)
.tiSettings({speed: 100})
.tiType('</br></br><p>Think onc</p> ') 
.tiPause(1000)
.tiDelete()
.tiSettings({speed: 100})
.tiType('</br></br><p>Think twice</p> ') 
.tiType('<p>Code once</p> ') 
.tiPause(2500)
.tiType('</br></br></br>')
.tiType('<p id="p2">Soo...</p>')
.tiPause(1000)
.tiType('<p id="p2">Welcome and keep testing this code.</p>')
.tiType('<p id="p2">I hope you enjoy it</p>')
.tiType('<p id="p2">as I enjoyed writing it...</p>')
;

},500);

});


/*********************/
    
$("#musicLogo").on("click",function (){
    document.getElementById("musicBox").style="z-index:3; height:98%; width:98%; left:0;"
    setTimeout(function(){
    document.getElementById("closeBtn").style.display="block";
     $("#musicLogo").fadeOut(500);
    },1000);
     setTimeout(function(){
     $("#musicSubBox").fadeIn(1000);
     
    },1500);
    
});

    
$("#gameLogo").on("click",function (){
    document.getElementById("gameBox").style="z-index:3; height:98%; width:98%; top:0;"
    setTimeout(function(){
    document.getElementById("closeBtn").style.display="block";
     $("#gameLogo").fadeOut(500);
    },1000);
    setTimeout(function(){
     $("#mainCardBox").fadeIn(1000);
     newGame();
    },1500);
    
    
});

    
$("#drawLogo").on("click",function (){
    document.getElementById("drawBox").style="z-index:3; height:98%; width:98%; top:0; left:0; ";
    setTimeout(function(){
    document.getElementById("closeBtn").style.display="block";
    $("#drawLogo").fadeOut(500);
    },1000);
    
    setTimeout(function(){
    $("#drawPage").fadeIn(500);
    goToDraw();
    },1500);
});


}

function closeMenu(){
   
    document.getElementById("t").style="display:none;"; 
    document.getElementById("msgBox").style="z-index:2; height:48%; width:48%;";

    document.getElementById("musicSubBox").style="display:none;";
    document.getElementById("musicBox").style="z-index:2; height:48%; width:48%; left:50%;";
    
    document.getElementById("gameBox").style="z-index:2; height:48%; width:48%; top:50%;" ;
    document.getElementById("mainCardBox").style="display:none;";
    
    document.getElementById("drawBox").style="z-index:2; height:48%; width:48%; top:50%; left:50%;";
    document.getElementById("closeBtn").style.display="none"; 
    document.getElementById("msgLogo").style.display="block";
    document.getElementById("musicLogo").style.display="block";
    document.getElementById("gameLogo").style.display="block";
document.getElementById("drawPage").style.display="none"; document.getElementById("drawLogo").style.display="block";
}
    
 

function logoutFinal(){

    closeMenu();
    setTimeout(function(){
    $("#final").slideToggle(1000);
    $("#containerSign").fadeIn(50);
    $("#containerReg").fadeIn(50);
    },1000);
}

/******************************/
/**  Bolero & MUSICBOX  **/
/******************************/

var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoMusic', {
        events: {
                'onReady': onPlayerReady,
                onStateChange: 
        function(e){
            if (e.data === YT.PlayerState.ENDED) {
                player.playVideo(); 
            }
        }
                }
    });
}
    
function onPlayerReady(event) {
    event.target.setVolume(50);
    event.target.playVideo();
        
    $(document).ready(function() {
        $('#main').on('click', function () {
            player.setVolume(50);
            player.playVideo();
            $( "#main" ).unbind( "click" );
        });
    });        
    
    $('#btnMusic').on('click', function () {
        if(player.getPlayerState()==1){
        player.pauseVideo();
        }else{player.playVideo();} 
        }); 
        
    $('#song1').on('click', function () {
       player.loadVideoById("jGtiYJ5zFWg", 4);  // try - pink
        }); 
     $('#song2').on('click', function () {
      player.loadVideoById('wgboeBdbr60');  // new rules (remix) - dua lipa
     }); 
      $('#song3').on('click', function () {
      player.loadVideoById('NreM_D7w3uw'); // milion reasons - lady gaga
     }); 
     $('#song4').on('click', function () {
      player.loadVideoById('OEl9ISp66M0'); // layla - eric clapton
     });
     $('#song5').on('click', function () {
      player.loadVideoById('b4jwprFiDeU'); // you are so beautiful - joe cocker
     });
     $('#song6').on('click', function () {
      player.loadVideoById('x7bIbVlIqEc'); // nothing else matters - metalica
     });
      $('#song7').on('click', function () {
      player.loadVideoById('4T_G20bPZqQ', 139); //the phantom in the opera - sarrah b. & antonio b.
     });
      $('#song8').on('click', function () {
      player.loadVideoById('KJ_HHRJf0xg'); // habanera carmen - bizet
     });
      $('#song9').on('click', function () {
      player.loadVideoById('r30D3SW4OVw'); // bolero - Raveli
     });
       
}

function setVolume (val){
    player.setVolume(val);
}

$(document).ready( function() {
$('input').bind('keydown', function(event) { 
     if (event.keyCode === 13) {
          event.preventDefault();
        if($("#sign").css("display") === "none") getData();
        else signIn();
    }
 });
 
});

/**************************/
/***********GAME**********/
/*************************/



var srcImg = [
    "https://www.clarkhawaii.com/images/flag_germany_1x.png",  //germany
    "https://www.clarkhawaii.com/images/flag_spain_1x.png",  // spain
    "https://www.rgf-hragent.asia/Assets/common/images/common/flag_india.png",  // india
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfe4stcAiPQw-t1YlvSoK5sHwgUx8CCntRwa_K3HS1OrhmYmOOg",  //czech
    "https://www.rgf-hragent.asia/Assets/common/images/common/flag_thai.png",  //thai
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Presidential_Standard_of_Burkina_Faso.svg/50px-Presidential_Standard_of_Burkina_Faso.svg.png",  // burkina faso
    "https://www.maxgaming.com/content/img/flags/flag_norway.png",  // norway
    "https://tse2.mm.bing.net/th?id=OIP.K92jfF0ZcP7uc6-_g8A6TQAyAy&w=50&h=50&c=7&qlt=90&o=4&pid=1.7"  // greece
];

var counter = 0;
var cardSrc = "#cardBox";
var opId = "";
var opImg = "";
var foundImg = 0;

$(function() {

for (var i = 1; i < 3 ; i++) {
    $.each(srcImg, function(j, k) {
        $(cardSrc).append("<div id=card" + i + j + "><img src=" + k + " />");
    });
}
    $(cardSrc + " div").click(playMemo);
    setImagesOnCard();
});

    
function setImagesOnCard() {
    var allImg = $(cardSrc).children();
    var currImg = $(cardSrc + " div:first-child");
    var arrImg = new Array();

    for (var i = 0; i < allImg.length; i++) {
        arrImg[i] = $("#" + currImg.attr("id") + " img").attr("src");
        currImg = currImg.next();
    }
    
    currImg = $(cardSrc + " div:first-child");
    
    for (var z = 0; z < allImg.length; z++) {
        var numRand = funRand(0, arrImg.length - 1);
        $("#" + currImg.attr("id") + " img").attr("src", arrImg[numRand]);
        arrImg.splice(numRand, 1);
        currImg = currImg.next();
    }
}


function playMemo() {
    var id = $(this).attr("id");

    if ($("#" + id + " img").is(":hidden")) {
        $(cardSrc + " div").unbind("click", playMemo);
    
        $("#" + id + " img").slideDown('slow');    

        if (opImg == "") {
            opId = id;
            opImg = $("#" + id + " img").attr("src");
            setTimeout(function() {
                $(cardSrc + " div").bind("click", playMemo)
            }, 300);
        } else {
            currentOpen = $("#" + id + " img").attr("src");
            if (opImg != currentOpen) {
                setTimeout(function() {
                    $("#" + id + " img").slideUp('200'); 
                    $("#" + opId + " img").slideUp('200'); 
                    opId = "";
                    opImg = "";
                }, 400);
            } else {
                foundImg++;
                opId = "";
                opImg = "";
            }
            setTimeout(function() {
                $(cardSrc + " div").bind("click", playMemo)
            }, 400);
        }
        counter++;
        $("#counter").html("" + counter);

        if (foundImg == srcImg.length) {
            $("#counter").prepend('<span id="bingo">Total </span>');
        }
    }
}


function newGame() {
    setImagesOnCard();
    $(cardSrc + " div img").hide();
    $(cardSrc + " div").css("visibility", "visible");
    counter = 0;
    $("#bingo").remove();
    $("#counter").html("" + counter);
    opId = "";
    opImg = "";
    foundImg = 0;
    return false;
}


function funRand(mxv, mnv) {
        return Math.round(Math.random() * (mxv - mnv) + mnv);
}
    

/**************************/
/********* DRAWING *******/
/*************************/

function goToDraw(){
    
    var el=document.getElementById("mainBox");
    var el1=document.getElementById("content");
    var w=el.offsetLeft+el1.offsetLeft;
    var h=el.offsetTop+el1.offsetTop-10;
    var ctx, color; 
    
    $(document).ready(function () {
        $("#new").on("click", function(){
        newCanvas();
    });

  
    newCanvas ();
        
    $("#replacerClassName").spectrum({
        replacerClassName : "awesome",
        showPaletteOnly: true,
        togglePaletteOnly: true,
        togglePaletteMoreText: 'more',
        togglePaletteLessText: 'less',
        color: 'blue',
        show: function(color) {
        ctx.beginPath();
        ctx.strokeStyle = color.toHexString();
    },
        move: function (color) {    
        ctx.beginPath();
        ctx.strokeStyle = color.toHexString();
    },
        change: function() {
        
    },
        palette: [
        ['black', 'grey','blanchedalmond',
        'rgb(255, 128, 0);', 'hsv 100 70 50'],
        ['red', 'yellow', 'green', 'blue', 'violet']
    ]
    });
    

    var t = $("#replacerClassName").spectrum("get");
    color=t.toHexString();           
    ctx.beginPath();
    ctx.strokeStyle = color;

    $("#new").click(function() {
        newCanvas();
    });
});

function newCanvas(){
    var canvas = '<canvas id="canvas" width="250px" height="300px" ></canvas>';
    $("#content").html(canvas);

    $("#eraser").on("click", function(){
        ctx.strokeStyle = '#DCDCDC';
    });

   
    ctx=document.getElementById("canvas").getContext("2d");
    document.getElementById("canvas").style="background:url(http://maxvision.us/wp-content/uploads/2017/06/minion-coloring-sheets-1be09fb64b50433cbf26025cde031daf-png-coloring-pages.jpg) no-repeat; background-size:cover;";
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;    
   
    $("#canvas").drawTouch();
    $("#canvas").drawPointer();
    $("#canvas").drawMouse();
}

$.fn.drawTouch = function() {
    var start = function(e) {
        e = e.originalEvent;
        ctx.beginPath();
        x = e.changedTouches[0].pageX-w;
        y = e.changedTouches[0].pageY-h;
        ctx.moveTo(x,y);
    };
    var move = function(e) {
        e.preventDefault();
        e = e.originalEvent;
        x = e.changedTouches[0].pageX-w;
        y = e.changedTouches[0].pageY-h;
        ctx.lineTo(x,y);
        ctx.stroke();
    };
    $(this).on("touchstart", start);
    $(this).on("touchmove", move);    
}; 
    

$.fn.drawPointer = function() {
    var start = function(e) {
        e = e.originalEvent;
        ctx.beginPath();
        x = e.pageX-w;
        y = e.pageY-h;
        ctx.moveTo(x,y);
    };
    var move = function(e) {
        e.preventDefault();
        e = e.originalEvent;
        x = e.pageX-w;
        y = e.pageY-h;
        ctx.lineTo(x,y);
        ctx.stroke();
    };
    $(this).on("MSPointerDown", start);
    $(this).on("MSPointerMove", move);
};        


$.fn.drawMouse = function() {
    var clicked = 0;
    var start = function(e) {
        clicked = 1;
        ctx.beginPath();
        x = e.pageX-w;
        y = e.pageY-h;
        ctx.moveTo(x,y);
    };
    var move = function(e) {
        if(clicked){
            x = e.pageX-w;
            y = e.pageY-h;
            ctx.lineTo(x,y);
            ctx.stroke();
        }
    };
    var stop = function(e) {
        clicked = 0;
    };
    $(this).on("mousedown", start);
    $(this).on("mousemove", move);
    $(window).on("mouseup", stop);
};

}