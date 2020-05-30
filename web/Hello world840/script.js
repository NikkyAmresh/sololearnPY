// Created by Prince

// Created by Niush sitaula

alert("Please also check another typing version too....from my profile..or anywhere....")

var list = ["Hola Mundo","Bonjour le monde"," नमस्कार संसार","Γειά σου Κόσμε","Hallo Welt","नमस्ते दुनिया","Привет мир","Olá Mundo","こんにちは世界","你好，世界","안녕 세상","Ciao mondo","สวัสดีชาวโลก","salam dünya","salve mundi","Chào thế giới","Merhaba Dünya","Hello World"];
var indexI = 0;

setInterval(function(){
    if(indexI < list.length){
        document.getElementById("hello").innerHTML = list[indexI];
        indexI++;
    }else{
        indexI = 0;
    }
},1000); //Change to 200 it's fun...//
//Update: A Bit Shorter code...... :)


/*
//Old Code....very long.....new code...up one..
function sayIt(){
    //console.log("Next");
    var timeout = setTimeout(function(){
        if(indexI < list.length){
            document.getElementById("hello").innerHTML = list[indexI];
            indexI++;
            //console.log(indexI);
            sayIt();
        }else{
            indexI = 0;
            sayIt();
        }
    }, 1000); //Change to 200 it's fun...//
}

sayIt();
*/