function read(e){
    var ic,au;
    var r=(new DOMParser).parseFromString(e,"text/html").querySelector("body");
    for(var i=1;i<21;i++){
   r1=r.querySelector("div.codeContainer:nth-child("+i+")");
 /* r=r.querySelector("div.publicCodes");
    r=r.querySelector("div.codeContainer");
    r=r.querySelector("div.code");
    r=r.querySelector("div.iconContainer");*/
    ic=r1.querySelector("div.iconContainer");
    au=r1.querySelector("div.authorDetails");
    au=au.querySelector("div.texts");
    r2=r1.querySelector("div.codeDetails");
    console.log(" "); 
    console.log("user id: "+findid(au.innerHTML.trim().slice(30, 47)))
    console.log("code link: "+r2.querySelector("a").href);
    console.log("author name: "+au.querySelector("a").innerHTML);
  //  console.log(au.querySelector("a").href);
    console.log("date: "+au.querySelector("p").innerHTML);
    console.log("code name: "+r2.querySelector("a").innerHTML);
    console.log("upvotes: "+r2.querySelector("p").innerHTML)
    console.log("lang: "+ic.querySelector("a:nth-child(1)").innerHTML);
    }}
function findid(e){
    var c="";
    for(var i=0;i<e.length;i++){
        if($.isNumeric(e[i])){
            c+=e[i];
        }
    }
    return c;
}
        var t=new XMLHttpRequest;
        t.onreadystatechange=function(){ if(t.readyState==XMLHttpRequest.DONE&&200==t.status){var n=read(t.responseText);}};
         var n="https://cors-anywhere.herokuapp.com/https://www.sololearn.com/Codes";
        t.open("GET",n,!0),
        t.send(null)
        $(function(){
        alert("Auto-Updating")
       })
