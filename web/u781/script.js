// Created by @n0nym0u§

//thanks to Niush sitaula to fix promise of pause before play error
alert("UPDATES:\n* Autoplay added(no need to play next song after the end of each song).\n* On scrolling effect added to image.\n* Changes made in functionality of next and prev.");
alert("Don't forget to hit a like if it deserves it.. ☺️\n🌸🌼Thanks to sololearn for code of the day and sololearners for 1.6k likes..🌸🌼😊");

function wa(){
    window.location.href = "https://api.whatsapp.com/send?&text=hi%2C%20this%20is%20@n0nym0u§%20code";
}
function fb(){
    window.location.href = "fb://messaging";
}
function cb(elementId){
    var aux = document.createElement("input"); aux.setAttribute("value","hi, this is @n0nym0u§ code"); document.body.appendChild(aux); aux.select(); document.execCommand("copy"); document.body.removeChild(aux);
    alert("copied to clipboard");
}
function gm(){
 window.location.href = "mailto:hi@gmail.com?subject=this%20is&body=@n0nym0u§%20code";
}
function msg(){
 window.location.href = "sms:+912356523565?body=hi%2C%20this%20is%20@n0nym0u§%20code";
}
function sl(){
    window.location.href = "https://www.sololearn.com/Discuss/454972/?ref=app";
}
function tw(){
   window.location.href = "twitter://post?message=hi%2C%20this%20is%@n0nym0u§%20code";
}
function bt(){}

alert("# Click on add songs? to add songs 👍\n# Click on three dots(right of song) and share and whatsapp and select number and see magic..\n# Messaging, copy to clip board, gmail also functions very well.\n# Delete key deletes the song.")
function addsong(){
 
 img_url = $("#iurl").val();
 song_url = $("#surl").val();
 song_name= $("#sname").val();
 var imslice = img_url.slice(-3);
 var sslice = song_url.slice(-3);
 
if(song_url !== '' && img_url !== '') {
if((imslice !== ("jpg"||"png")) && (sslice !== ("mp3" || "ogg"))){
     alert("Please enter correct data !! ");
 }else{
 songs.push(song_url); 
 images.push(img_url); 
 apnd = $("#container").append("<div id='added' class='pl'><img src=" + img_url + " height='40px'width='50px'>" + song_name + "<div class='dropdown' style='float:right;'><img class='dropbtn' src = 'http://www.vvillageresorts.com/tour/skin/Image_2FB6632C_20CB_DBE7_41AE_0C4F8CFBCC75.png' height='40px'> <div class='dropdown-content'><a href=#>Download</a><a href=# class='like'>Like</a>  <a href=# class = 'share'>Share</a>  <a href=# class = 'del'>Delete</a> </div></div></div>");
//-------------once------------------------\\
$('.like').click(function(){
    alert("added to liked songs.. 😁")
})
$(".share").hover(function(){
    $(".share_drop").css("display","block");
}/*,function(){$(".share_drop").css("display","none");}*/)
 $(".dropdown").click(function(e){e.stopPropagation();})
$(".del").click(function(){
    var ind = $(this).parent().parent().parent().index();
    var song = songs[ind];
    var sung = $("#slider2").attr("src");
if(song == sung ){
document.getElementById("play").innerHTML = "play"
if(ind >= songs.length - 1){
 document.getElementById("slider2").src = songs[0];
 document.getElementById("slider1").src = images[0];   }
 else{
 document.getElementById("slider2").src = songs[ind + 1];
 document.getElementById("slider1").src = images[ind + 1];
 
 }
}
     songs.splice(ind,1);
     images.splice(ind,1);
 $(this).parent().parent().parent().remove();
 
})
$(".pl").click(function(){
var pl = $(this).index();
var abc = document.getElementById('slider1');
    var xyz = document.getElementById('slider2');
    abc.src = images[pl]  ;
    xyz.src = songs[pl];xyz.play();
    document.getElementById("play").innerHTML ="pause";
     $("#slider1").addClass("update");        
})    
 alert("your song is added successfully..☺️👍");}
}else{alert("Please enter the data !! ")}
 
}
window.onunhandledrejection = 
  function(event) { 
    event.preventDefault(); 
  } 
function myFunction(){
   var sung = $("#slider2").attr("src");
   var indx = songs.indexOf(sung);
      var abc = document.getElementById('slider1');
    var xyz = document.getElementById('slider2');
    if(indx >= songs.length - 1){
    xyz.src = songs[0];
    abc.src = images[0];    
    }
    else{
    xyz.src = songs[indx + 1];
    abc.src = images[indx + 1];}
   xyz.play();
    
}  
$(function(){
    $("#page").click(function(){
    $("#form").fadeOut(1);
    $(".share_drop").hide(1000);
    document.getElementById("temp").innerHTML = "Add Songs?";
});
$("#container").scroll(function() {
var scrollTop = $("#container").scrollTop();
   if (scrollTop < 150) {
        maxHeight = 150 - 75 * ((scrollTop - 100)) / 200;
    }
    $('#slider1').css({
        'max-height': maxHeight + "px",
    'max-width':maxHeight + "px"
    });
if ($(this).scrollTop() > 10){  
  $('#container').addClass('containing');
    }
  else{
    $('#container').removeClass('containing'); 
  }
});
})
function next() {
 $("#slider1").addClass("update");   
document.getElementById("play").innerHTML ="pause";      
var sung = $("#slider2").attr("src");
   var indx = songs.indexOf(sung);
      var abc = document.getElementById('slider1');
    var xyz = document.getElementById('slider2');
    if(indx >= songs.length - 1){
    xyz.src = songs[0];
    abc.src = images[0];    
    }
    else{
    xyz.src = songs[indx + 1];
    abc.src = images[indx + 1];}
    xyz.play();
}
function prev() {
 $("#slider1").addClass("update"); 
document.getElementById("play").innerHTML ="pause";        
var sung = $("#slider2").attr("src");
   var indx = songs.indexOf(sung);
      var abc = document.getElementById('slider1');
    var xyz = document.getElementById('slider2'); 
    if(indx == 0) {
    xyz.src = songs[songs.length - 1];
    abc.src = images[images.length - 1];  
    }
    else{
    xyz.src = songs[indx - 1];
    abc.src = images[indx - 1];}
    xyz.play();
}
function audio(){
   var xyz = document.getElementById("slider2");
   var isReady = xyz.readyState;
   if(isReady > 2){
    if(xyz.paused === true){
            xyz.play();
 $("#slider1").addClass("update");           document.getElementById("play").innerHTML ="pause";
        }
        else{
            xyz.pause();
 $("#slider1").removeClass("update");                    document.getElementById("play").innerHTML ="play" ;
            
        }
    }
    else{
        document.getElementById("play").style.opacity = 0.2;
        var opacityTest = setInterval(function(){
            if(xyz.readyState > 2){
                document.getElementById("play").style.opacity = 1;
                clearInterval(opacityTest);
            }
        },100);
    }
}

$(function(){
     
 
//--------------same-----------------------\\ 
$(".pl").append("<div class='dropdown' style='float:right;'><img class='dropbtn' src = 'http://www.vvillageresorts.com/tour/skin/Image_2FB6632C_20CB_DBE7_41AE_0C4F8CFBCC75.png' height='40px'> <div class='dropdown-content'><a href=#>Download</a><a href=# class = like>Like</a>  <a href=# class='share'>Share</a>  <a href=# class = 'del'>Delete</a> </div></div>");
//------------twice------------------------\\
$('.like').click(function(){
    alert("added to liked songs.. 😁😁")
})
$(".share").hover(function(){
    $(".share_drop").css("display","block");
}/*,function(){$(".share_drop").css("display","none");}*/)
$(".dropdown").click(function(e){e.stopPropagation();})
$(".del").click(function(){
  
   
    var ind = $(this).parent().parent().parent().index();
    var song = songs[ind];
    var sung = $("#slider2").attr("src");
if(song == sung ){
document.getElementById("play").innerHTML ="play";
$("#slider1").removeClass("update");
if(ind >= songs.length - 1){
 document.getElementById("slider2").src = songs[0];
 document.getElementById("slider1").src = images[0];   }
 else{
 document.getElementById("slider2").src = songs[ind + 1];
 document.getElementById("slider1").src = images[ind + 1];
 
 }
}
     songs.splice(ind,1);
     images.splice(ind,1);
 $(this).parent().parent().parent().remove();
 
})
$(".pl").click(function(){
var pl = $(this).index();
var abc = document.getElementById('slider1');
    var xyz = document.getElementById('slider2');
    abc.src = images[pl]  ;
    xyz.src = songs[pl];xyz.play();
    document.getElementById("play").innerHTML ="pause";
     $("#slider1").addClass("update");        
})
//-------------—--end--------------------\\
   $("#temp").click(function(){
var w = document.getElementById("temp").innerHTML;
var x = "Go Back";
var y = "Add Songs?";
if(w != y){
    document.getElementById("temp").innerHTML = y;

}else{
    document.getElementById("temp").innerHTML = x;
}
$("#form").slideToggle(1000);
 })
})

 var images = [
 // 1 faded
    'https://i.ytimg.com/vi/Rmtx9slmodw/maxresdefault.jpg', 
    //2 attention
    'https://2.bp.blogspot.com/-GyekGPtvKIs/WPn_wp3KVSI/AAAAAAAADNs/I2_pos2EloAcu4tTPqVfdMMwY3y1uy7xQCLcB/s400/Charlie%2BPuth.jpg', 
    //3 cheap thrills 
    'https://upload.wikimedia.org/wikipedia/en/f/fc/Sia_Cheap_Thrills.png', 
    //4 closer
    'https://www.directlyrics.com/img/upload/0ae20266.jpg', 
    //5 love me like you do 
     'https://upload.wikimedia.org/wikipedia/en/1/17/Ellie_Goulding_-_Love_Me_Like_You_Do.png', 
      //6 I'm the one
     'https://images.genius.com/ccc87d4afb4e2d957a8c3c2700390bc1.1000x1000x1.jpg', 
      //7 shape of u
     'https://images.genius.com/b987a0d3e07d6f10d3c434bfb69a651f.1000x1000x1.jpg', 
     //8cold water
      'https://upload.wikimedia.org/wikipedia/en/7/76/Major_Lazer_-_Cold_Water.png', 
      //9 sorry
      'https://www.directlyrics.com/img/upload/0c8c0264.jpg', 
      //10Rockabye
      'https://upload.wikimedia.org/wikipedia/en/6/69/Clean_Bandit_-_Rockabye_%28feat._Sean_Paul_%26_Anne-Marie%29.png', 
      //11 let me love you 
      'https://i.scdn.co/image/1d96f6fbc5a4eaa9640d4ae41db0e4dc4fa91baa', 
       //we don't talk anymore
      'https://images.genius.com/0ae965f321d9c298ebc9cf56260cc7eb.1000x1000x1.jpg', 
      //numb
      'http://img08.deviantart.net/0b3e/a/large/indyart/indymisc/meteora_wp_by_neographixx.jpg'
      
];

 var songs = [
 //1 faded - Alan Walker 
   'http://drive.funados-radio.fr/playlist/HITS%20DU%20MOMENT/Alan%20Walker%20-%20Faded.mp3', 
   //2 attention - charlie puth
   'http://dl.20track.ir/mahdi/Album2/MARS2017/Charlie%20Puth%20-%20Attention%20-%20MP3%20128.mp3', 
   //3 cheap thrills
   'http://tegos.kz/new/mp3_full/Sia_-_Cheap_Thrills.mp3',
   //4 closer - the chain smokers
  'http://dl2.djring.com/sd1.djring.com/128/474893/Closer+-+The+Chainsmokers%20(DJJOhAL.Com).mp3', 
  //5 love me like you do - ellie goulding
  'http://bossmp3.me/siteuploads/7/362/1198/Love%20Me%20Like%20You%20Do%20(Ellie%20Goulding)%20-%20320%20Kbps%20-%20(BossMp3.Me).mp3', 
  //6 I'm the one - Justin Bieber 
  'http://dl2.djring.com/lq.djring.com/48/482473/I%20m%20The%20One%20Ft%20Justin%20Bieber%20Quavo%20Chance%20The%20Rapper%20%20Lil%20Wayne%20-%20DJ%20Khaled%20(DJJOhAL.Com).mp3', 
  //7 shape of u - ed sheeran
  'http://dl2.djring.com/sd2.djring.com/128/479068/Shape%20of%20You%20-%20Ed%20Sheeran%20(DJJOhAL.Com).mp3', 
  //8 cold water - Justin Bieber 
    'http://dl2.djring.com/sd1.djring.com/128/474895/Cold+Water+-+Major+Lazer+Justin+Bieber%20(DJJOhAL.Com).mp3', 
    //9 sorry - Justin Bieber 
    'http://srv2.teupload.com/Music/Album/Justin%20Bieber%20-%20Purpose%20(Deluxe)/Justin%20Bieber%20-%20Purpose%20(Deluxe)%20128/04%20Sorry.mp3', 
    //10 Rockabye - clean bandit
    'http://tegos.kz/new/mp3_full/Clean_Bandit_-_Rockabye.mp3',
    //11 let me love you - Justin Bieber 
    'http://dl2.djring.com/sd1.djring.com/128/479065/Let+Me+Love+You+-+DJ+Snake+Ft+Justin+Bieber%20(DJJOhAL.Com).mp3', 
    //we don't talk anymore - charlie puth
    "http://tentechaudio.com/application/lagubarat/Charlie%20Puth%20(Feat.%20Selena%20Gomez)%20-%20We%20Don't%20Talk%20Anymore.mp3", 
    //Numb - Linkin park
    'http://skymaza.com/upload_file/1/3647/3663/3666/Linkin%20Park%20-%20Meteora%20-%2013%20-%20Numb-.mp3'
    ];
    
