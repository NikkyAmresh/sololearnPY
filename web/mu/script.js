$(document).ready(function(){var track=document.getElementById("music");var mymusic={played:false,scilent:false,fav:false}
setInterval(function(){if(track.readyState!=4){$(".load").removeClass("hide");}else{$(".load").addClass("hide");}
if(track.currentTime==track.duration){$(".replay").removeClass("hide");clearInterval();}},100);$(".replay").click(function(){track.play();mymusic.played=true;$(this).html("pause_circle_filled");$(".replay").addClass("hide");});$(".but").click(function(){if(mymusic.played==false){track.play();mymusic.played=true;$(this).html("pause_circle_filled");}else{mymusic.played=false;track.pause();$(this).html("play_circle_filled");}});$(".scilent").click(function(){if(mymusic.scilent==false){$(this).html("volume_off");mymusic.scilent=true;track.muted=true;}else{$(this).html("volume_up");mymusic.scilent=false;track.muted=false;}});$(".fav").click(function(){if(mymusic.fav==false){$(this).html("favorite");mymusic.fav=true;}else{$(this).html("favorite_border");mymusic.fav=false;}});track.ontimeupdate=function(){let pos=(track.currentTime / track.duration)*100+'%';var cmin=Math.floor((track.currentTime)%60);if(cmin.toString().length==1){cmin='0'+cmin;}
$("#cur").html(Math.floor((track.currentTime)/ 60)+':'+cmin);var tmin=Math.floor((track.duration)%60);if(tmin.toString().length==1){tmin='0'+tmin;}
$("#tot").html(Math.floor((track.duration)/ 60)+':'+tmin);$(".myBar").css("width",pos);}
$(".pre").click(function(){track.currentTime-=4;});$(".next").click(function(){track.currentTime+=4;});$(".skip_prev").click(function(){var en=$("#sn").val();var nn,pn;if(en==0){pn=64;nn=1;}else{if(en==64){nn=0;pn=63}else{nn=eval(en+"+"+1)
pn=en-1}}
track.pause()
track=new Audio("/static/"+pn+".mp3");$("#sn").val(pn)
track.play()
$("#pn").html(pn)
setInterval(function(){if(track.readyState!=4){$(".load").removeClass("hide");}else{$(".load").addClass("hide");}
if(track.currentTime==track.duration){$(".replay").removeClass("hide");clearInterval();}},100);$(".replay").click(function(){track.play();mymusic.played=true;$(this).html("pause_circle_filled");$(".replay").addClass("hide");});track.ontimeupdate=function(){let pos=(track.currentTime / track.duration)*100+'%';var cmin=Math.floor((track.currentTime)%60);if(cmin.toString().length==1){cmin='0'+cmin;}
$("#cur").html(Math.floor((track.currentTime)/ 60)+':'+cmin);var tmin=Math.floor((track.duration)%60);if(tmin.toString().length==1){tmin='0'+tmin;}
$("#tot").html(Math.floor((track.duration)/ 60)+':'+tmin);$(".myBar").css("width",pos);}});$(".skip_next").click(function(){var en=$("#sn").val();var nn,pn;if(en==0){pn=64;nn=1;}else{if(en==64){nn=0;pn=63}else{nn=eval(en+"+"+1)
pn=en-1}}
track.pause()
track=new Audio("/static/"+nn+".mp3");$("#sn").val(nn)
track.play()
$("#pn").html(nn)
setInterval(function(){if(track.readyState!=4){$(".load").removeClass("hide");}else{$(".load").addClass("hide");}
if(track.currentTime==track.duration){$(".replay").removeClass("hide");clearInterval();}},100);$(".replay").click(function(){track.play();mymusic.played=true;$(this).html("pause_circle_filled");$(".replay").addClass("hide");});track.ontimeupdate=function(){let pos=(track.currentTime / track.duration)*100+'%';var cmin=Math.floor((track.currentTime)%60);if(cmin.toString().length==1){cmin='0'+cmin;}
$("#cur").html(Math.floor((track.currentTime)/ 60)+':'+cmin);var tmin=Math.floor((track.duration)%60);if(tmin.toString().length==1){tmin='0'+tmin;}
$("#tot").html(Math.floor((track.duration)/ 60)+':'+tmin);$(".myBar").css("width",pos);}});});