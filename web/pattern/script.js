// Created by Andrew

window.onload=function(){
    var pre = document.querySelector("pre").innerHTML;
    
    function makeColor(text, color, print){
        var str = "<span style='color:" + color + ";'>" + text + "</span>";
        var pattern = new RegExp(text, "g");
        pre = pre.replace(pattern, str);
        document.querySelector("pre").innerHTML = pre;
    }
    
    if(pre.match(/"(.*?)"/g)){
        var len = pre.match(/"(.*?)"/g).length;
        for(var i = 0; i < len; i++){
            pre = pre.replace(pre.match(/"(.*?)"/g)[i], "<span style='color:#5C7;'>" + pre.match(/"(.*?)"/g)[i] + "</span>");
            document.querySelector("pre").innerHTML = pre;
        }
    }
    document.querySelector("#exec").onclick=function(){
        var pattern = document.querySelector("#regexp").value;
        pattern = eval(pattern) || "Error";
        if(pattern == "Error"){
            alert("Something is wrong with that pattern.");
        }
        else{
        var string = document.querySelector("#string").value;
        var out = document.querySelector("#boolean")
        if(string.match(pattern)){
            out.innerHTML = string.match(pattern) + "<br /><span style='color:green'>This returned True</span>";
            out.style.color = "yellow";
        }
        else{
            out.innerHTML = "This returned False";
            out.style.color = "red";
        }
        }
    }
    
    makeColor("String", "#37B");
        
}