console.log=function(a){
    alert(a);
}
console.error=function(a){
    alert(a);
}
var songs = [
 //1 faded - Alan Walker 
   'http://drive.funados-radio.fr/playlist/HITS%20DU%20MOMENT/Alan%20Walker%20-%20Faded.mp3', 
   //2 attention - charlie puth
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
var now_song=$("#file")[0];
    
var now=songs[0];
$(function(){
$("#s_name").html(now);
var x=0;
    $("#play").click(function(){
    v();
        if(x===0){
              $(".pause").show();
               $(".play").hide();
               play();
        }
        else{
              $(".pause").hide();
              $(".play").show();
              pause();
              now_song.pause();
        }
        x++;
        if(x===2){
            x=0;
        }
    });
    $("#next").click(function(){
    v();
        next(songs.indexOf(now));
        if(x===0){
          $("#play").click();
        }
    });
    $("#prev").click(function(){
    v();
        if(songs.indexOf(now)==0){
        prev(songs.length);
        
    }else{
        prev(songs.indexOf(now));
    }
     if(x===0){
         $("#play").click();
        }
    })
});
pause=function(){
    $("#status").html("Paused");
    now_song.pause();
    $("#file")[0].play();
}
play=function(){
    now_song=$("#file")[0];
    $("#status").html("Playing...");
    now_song.play();
}
function prev(a){
    now=songs[a-1]
    $("#s_name").html(now);
    s_play(a-1);
}
function next(a){
    if(a==songs.length-1){
        a=-1;
    }
    now=songs[a+1]
    $("#s_name").html(now);
    s_play(a+1);
    }
function v(){
    try{navigator.vibrate(30)}catch(e){};
}
function s_play(a){
now_song=$("#file")[0];
var c=songs[a];
  now_song.src=c;
    isPlaying =now_song.currentTime > 0 && !now_song.paused && !now_song.ended && now_song.readyState > 2;
   if (isPlaying){ 
   now_song.pause(); 
   }else{
    now_song.play();
   }

}
function s_pause(a){
   now_song.pause();
}
alert("Experimental yet ... please wait while new song is loading...Don't press next/prev continuously ")