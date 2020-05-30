function convert(e){
    return e.replace(/src="/g,'src="https://www.technewsworld.com').replace(/>/g,">");
    }
function news(){
        var c;
        var t=new XMLHttpRequest;
        t.onreadystatechange=function(){
        if(t.readyState==XMLHttpRequest.DONE&&200==t.status){
        c=t.responseText;
        var r=(new DOMParser).parseFromString(c,"text/html").querySelector("body");
    r=r.querySelector("div.content-block:nth-child(1)").innerHTML;
       $("body").append(convert(r));
        }};
        var n="https://cors-anywhere.herokuapp.com/https://www.technewsworld.com";
        t.open("GET",n,!0),
        t.send(null)
}
$(function(){
   news()
})