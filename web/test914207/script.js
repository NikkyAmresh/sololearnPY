function read(e){
    var r=(new DOMParser).parseFromString(e,"text/html").querySelector("body");
            return{       name:r.querySelector("h1.name").innerHTML.trim(),
        level:r.querySelector(".detail div").innerHTML.slice(-20,-5),
        xp:r.querySelector(".detail span").innerHTML.trim()}}
        function info(e){
        var t=new XMLHttpRequest;
        t.onreadystatechange=function(){
        if(t.readyState==XMLHttpRequest.DONE&&200==t.status){
        var n=read(t.responseText);
        var jy="<li><img class='av' onerror='imgError(this);' src='https://api.sololearn.com/Uploads/Avatars/"+e+".jpg' style='border-radius:50%;height:82px;'> <br><a target='_blank' href='https://www.sololearn.com/Profile/"+e+"'>"+n.name+"</a> <br>Level : "+n.level+" <br>"+n.xp+" </li>";
        
        $("#loader").hide();
        document.write(jy)
        ;
        count>135&&$(".hide").hide()
        }};
        var n="https://cors-anywhere.herokuapp.com/https://www.sololearn.com/Profile/"+e;
        t.open("GET",n,!0),
        t.send(null)}
        function imgError(e){
        return e.onerror="",
        e.src="https://api.sololearn.com/Uploads/Avatars/1165622.jpg",!0
        }var count="0";
        $(function(){
        info(3268934)
        alert("hi")})