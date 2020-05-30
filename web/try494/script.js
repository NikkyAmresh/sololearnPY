
function parseJSON(data, id){
    var text = data;
    var q = id;
    var parser=new DOMParser();
    var htmlDoc=parser.parseFromString(text, "text/html");
   var user=htmlDoc.querySelector("body");
   var name=htmlDoc.querySelector("body").innerHTML;
   var xp=htmlDoc.querySelector("body").innerHTML.trim();
   return {
       id:id,
       name:name,
     //  level:level
     //  xp:xp
   };
}

function getDataVanilla(id, cb){
    /*
    make the request using vanilla JavaScript
    */
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            var data = parseJSON(xhr.responseText, id);
            // pass data to callback function
            cb(data);
        }
        else if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 400){
            
        }
    }
    var url = "https://www.sololearn.com/Profile/"+id;
    // use cors-anywhere API to make the request
    url = 'https://cors-anywhere.herokuapp.com/'+url;
    xhr.open('GET', url, true);
    xhr.send(null);
}

        
    
            
            
        

function showData(data){
    // call back function, data is a json containing id, name, level and XP
    
    var user_img=document.getElementById("user_img");
    var user_info=document.getElementById("user_info");
    user_img.src="http/Avatars/"+data.id+".jpg";
    user_info.innerHTML=JSON.stringify(data,null,2);
}

window.onload=function(){
   
   //getData("197327", showData);
   getDataVanilla("1", showData);
      
   }
   