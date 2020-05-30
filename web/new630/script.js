alert("Click on country name to see platinum member");
var url=["1857356","5160235","4586359","4687793","3928121","2877996","5199413","5026965","4827750","3268934","5387361","665092","1725640","3530248","3771694","2097533","2928507","3359773","4084594","400258","3069454","1165622","4819943","5055258","4337809","1587789","2610284","1144913","1788436","4079245","5162800","1024986","4604247","4093726","5366446","768738","5438898","3329545","3888540","2580385","4163177","1016646","1690363","5134217","2605947","3432718","3243485","3618197","426449","3336657","308760","4612310","3144629","2067446","3985199","2437074","4174477","533628","1215971","1607351","2751685","2613620","1101644","5015506","4353838","3099384","3259691","3254411","4414304","3577167","4107221","3512476","3359424","1405372","4135610","2925953","5322116","64545","4690260","840569","2458982","2704071","1775449","483085","1582455","1967114","2835675","3685063","421131","2337915","4023428","839168","4208780","782913","4650978","3307698","5190524","2766359","564885","119479","1992982","4905163","5233842","2551505","2755762","3909384","2034558","2034207","3213144","3300484","3355885","779917","2200299","2692124","1968233","3548583","2834521","742915","387080","3224302","4345967","4239628","197327","788415","3972762","842115","4530102","1163652","2788162","2238713","663594","4157142","1145348","3160358","5042571","1493512"];
function read(e){
    var r=(new DOMParser).parseFromString(e,"text/html").querySelector("body"),
    t=r.querySelector("h1.name").innerHTML.trim(),
    n=r.querySelector(".detail span").innerHTML.trim();
    return{name:t,level:r.querySelector(".detail div").innerHTML.trim().slice(-20,-5),xp:n}}
    function info(e,r){
    var t=new XMLHttpRequest;
    t.onreadystatechange=function(){      if(t.readyState==XMLHttpRequest.DONE&&200==t.status){var n=read(t.responseText);
    document.getElementById(r).innerHTML+="<li><img class='av' onerror='imgError(this);' src='https://api.sololearn.com/Uploads/Avatars/"+e+".jpg' style='border-radius:50%;height:72px;'> <br><a target='_blank' href='https://www.sololearn.com/Profile/"+e+"'>"+n.name+"</a> <br>Level : "+n.level+" <br>"+n.xp+" </li>";
    $("#loader").hide();
    }}
    var n="https://cors-anywhere.herokuapp.com/https://www.sololearn.com/Profile/"+e;
    t.open("GET",n,!0),t.send(null)}
 function show(a,b,elem){
     $("#loader").show();
     for(var i=a;i<b;i++){
       info(url[i],elem);
       } 
       $(this).off("click");
     }
   function imgError(image) { image.onerror = ""; image.src = "https://api.sololearn.com/Uploads/Avatars/1.jpg"; return true; }
   