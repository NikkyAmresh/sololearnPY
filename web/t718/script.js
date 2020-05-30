var c=[",,,,,",
",...",
",.,.",
",..",
".",
"..,.",
",,.",
"....",
"..",
".,,,",
",.,",
".,..",
",,",
",.",
",,,",
".,,.",
",,.,",
".,.",
"...",
",",
"..,",
"...,",
".,,",
",..,",
",.,,",
",,..",
"/",
",·,·,,",
"·,·,·,",",,··,,",".,,,,",
"..,,,",
"...,,",
"....,",
".....",
",....",
",,...",
",,,..",
",,,,.",
".,"]
var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ !.,";

function carp(word,pin){
var num=0;
for(var i=0;i<pin.length;i++){
    for(var j=0;j<a.length;j++){
        if(pin[i].toUpperCase()==a[j]){
            num+=i+j;
            }
    }
    
}
   var n=t=num;
    word=word.split(" ");
    
    var res2=[];
    for(var i=0;i<word.length;i++){
    var res=[];
        for(var j=0;j<word[i].length;j++){
            for(var k=0;k<a.length;k++){
           if(word[i][j].toUpperCase()==a[k]){
            var x=k+n;
            if(x>39){
                x=x%40;
            }
            res.push(c[x]);
        }
      }
        
     } 
     var p=i+t;
     if(p>=word.length){
                p=p%word.length;
            }
     res2[p]=res
    }
    var foo=[];
    for(var g=0;g<res2.length;g++){
     
        foo.push(res2[g].join(" "))
        
    }
    return foo.join("  ");
}
//document.write(carp("HOW ARE YOU DOING DEAR",320,707))
//console.log(darp(",,, ., .,,  .,., ., ,, .,.. ,.. .,.. ,,  ,.,, ., ,.. .,..","An"))
function darp(word,pin){
var num=0;
for(var i=0;i<pin.length;i++){
    for(var j=0;j<a.length;j++){
        if(pin[i].toUpperCase()==a[j]){
            num+=i+j;
            }
    }
    
}
    var n=t=num;
word=word.split("  ");
var res2 =new Array(word.length);
for(var i=0;i<word.length;i++){
 var res=[];
    var w2=word[i].split(" ");
    for(var j=0;j<w2.length;j++){
        for(var k=0;k<40;k++){
            if(w2[j]==c[k]){
            n=n%40
            var x=k-n;
                if(x<0){
                x=x+40;
            }
            res.push(a[x])
            }
        }
        t=t%word.length;
        var p=i-t;
     if(p<0){
                p=p+word.length;
            }
     res2[p]=res.join("")
    }
}
res2=res2.join(" ")
return res2;
}
