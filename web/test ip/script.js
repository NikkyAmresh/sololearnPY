// Created by Paul Caron

//Always discovering APIs. Paul Caron.


const url = "http://ip-api.com/json";

fetch(url).then( response => response.json() ).then(json => {
    //console.log(JSON.stringify(json, null, "    "))
   
    for(key in json){
        document.write(key+":"+json[key]+"<br>");
    }
});


