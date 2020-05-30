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
$(function(){
var seckey=".,,. ,,,.. ,. ,,.. ,,,,. .,.. ,·,·,, ..,. .. ..... .. ..,. ,, ,,,,. ,., ,..";

 $('#textarea').click(function(){
    bootbox.prompt({
        title: 'Enter Secret Key',
        placeholder: 'Secret Key',
        value: '',
        buttons: {
            confirm: {
                label: 'GET OTP'
            }
        },
        callback: function(value){
            alert(darp(seckey,value))
        }
    });
});
    $("#code").click(function(){
    $("#c").show()
   $("#c").val($("#code").html())
    copyText = document.getElementById("c");
  copyText.select();
  document.execCommand("copy");
  $("#c").hide()
  $("#suc").show();
  $("#suc").fadeTo(2000, 500).slideUp(500, function(){
    $("#suc").slideUp(500);
});
})
})

setInterval(function(){
    var d=new Date();
    var s=60-d.getSeconds()
    s>=30&&(s=s-30)
    var text="";
    for(var i=0;i<s;i++){
        text="#"+text;
    }
    $("#count").html(text)
},1000)