var c=[".",",",".,",",.","..",",,","..,",".,.",".,,",",..",",.,",",,.",",,,","...","....","...,","..,.","..,,",".,..",".,.,",".,,.",".,,,",",...",",..,",",.,.",",.,,",""]
var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.:)";
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
            if(x>25){
                x=x%26;
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
console.log(darp(",,, ., .,,  .,., ., ,, .,.. ,.. .,.. ,,  ,.,, ., ,.. .,..","An"))
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
        for(var k=0;k<26;k++){
            if(w2[j]==c[k]){
            n=n%26
            var x=k-n;
                if(x<0){
                x=x+26;
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


//console.log(darp(",,. ,... ..,. .,,, .... ,,. ,,, .,, ,.,, ..., ,... .. .,, ,.,, ,,, .., ,... .,",320,707))

//console.log(darp(".. .,  ., .. ..",0404))

//document.write("<pre>"+carp("Love you Shona",0313))

//console.log(darp(".,., ,.. ...,  ... ., ,.. .,, .,,,  .., ,.. ..,. ,.,,",0320))


//console.log(darp(",,. .... .,,, ..  ,.,. .... .,,.  ,, .... ..,, .. .,,, .. ..,,",7644))












/*
function encode(word){
word=word.split(" ");
console.log()
var res="";
var q=0//Math.floor(Math.random()*word.length);
for(var k=0;k<word.length;k++){
    
    var ran=0//Math.floor(Math.random()*25);
    for(var i=0;i<word[k].length;i++){
        for(var j=0;j<a.length;j++){
            if(word[k][i].toUpperCase()==a[j]){
               var x=j+ran;
               if(x>25){
                   x=x-26;
               }
                res+=c[x]
            }
        }
        res+=" "
        
    }
    res+="2"
    }
    console.log(res)
    res=res.split("2");
    res2="";
    for(var j=0;j<res.length;j++){
    for(var i=0;i<res[j].length;i++){
        var z=i+q;
               if(z>(res[j].length-1)){
                   z=z-res[j].length;
               } 
            res2+=res[j][z];
    }
    
    res2+=" 2";
    }
    return [res2,ran,q];
}
function decode(word,n,q){
    var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var res="";
    word=word.split(" ");
    for(var i=0;i<word.length;i++){
        for(var j=0;j<c.length;j++){
            if(word[i]==c[j]){
               var x=j-n;
               if(x<0){
                   x=x+26;
               }
                res+=a[x]
            }
        }
        
    }
    res2="";
    for(var i=0;i<res.length;i++){
        var z=i-q;
               if(z<0){
                   z=z+res.length;
               } 
            res2+=res[z];
    }
    return res2;
}
//var t=encode("I love you Annushree");
//document.write(t)
//console.log(decode("..,, ..,, .,,, ,.,. , .,, ..,, ,,. , .,. ... . . .,. ,, .,,. ..",13,15))*/
