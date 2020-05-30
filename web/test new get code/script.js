function read(e){
    var r=(new DOMParser).parseFromString(e,"text/html").querySelector("body");
    r=r.querySelector("div.list");
    $("ol").html(" ");
    for(var i=1;i<11;i++){
    $("ol").append("<a href="+r.querySelector("a:nth-child("+i+")").href+"><li>"+r.querySelector("a:nth-child("+i+")").innerHTML+"</li></a>")
    }
           }
        var t=new XMLHttpRequest;
        t.onreadystatechange=function(){
        if(t.readyState==XMLHttpRequest.DONE&&200==t.status){
        var n=read(t.responseText);
        }};
        var n="https://cors-anywhere.herokuapp.com/https://www.sololearn.com/Codes/";
        t.open("GET",n,!0),
        t.send(null)
        $(function(){
        alert("Auto-Updating")
       })
