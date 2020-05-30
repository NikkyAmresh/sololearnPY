var url=["5622623"];
function read(e){
    var r=(new DOMParser).parseFromString(e,"text/html").querySelector("body");
            return{       name:r.querySelector("h1.name").innerHTML,
        level:r.querySelector(".detail div").innerHTML.slice(-20,-5),
        xp:r.querySelector(".detail span").innerHTML.trim()}}
        function info(e,r){
        var t=new XMLHttpRequest;
        t.onreadystatechange=function(){
        if(t.readyState==XMLHttpRequest.DONE&&200==t.status){
        var n=read(t.responseText);
        document.getElementById(r).innerHTML+="<li><img class='av' onerror='imgError(this);' src='https://api.sololearn.com/Uploads/Avatars/"+e+".jpg' style='border-radius:50%;height:82px;'> <br><a target='_blank' id='gh' href='https://www.sololearn.com/Profile/"+e+"'>"+n.name+"</a> <br>Level <button onclick=copyToClipboard('#gh') >: "+n.level+" <br>"+n.xp+" </li>",
        count++,
        $("#loader").hide();
        
        }};
        var n="https://cors-anywhere.herokuapp.com/https://www.sololearn.com/Profile/"+e;
        t.open("GET",n,!0),
        t.send(null)}
        function show(e,r,t){
        alert()
        var c="<li class='hide'>Loading ";
            $("#"+t).html(c+"... </li>");
        for(var n=e;n<r;n++)info(url[n],t)}
        function imgError(e){
        return e.onerror="",
        e.src="https://api.sololearn.com/Uploads/Avatars/1165622.jpg",!0
        }var count="0";
        $(function(){
        
       $("p")[0].click()
        });
                                    
  function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}