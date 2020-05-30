// Created by Shinbi ドリアン

alert('don\'t forget to like ! It help me, thanks');
alert('20th of the featured codes ! Thanks :D');

$(document).ready(function (){ 

$('#submenu-link').hide(0);

window.onscroll = scrollFunction;

//function to see if user scroll down or not
function scrollFunction() {


    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {        
        $('#header').css({"height":"50px","borderBottom":"5px solid #DEB887"});
       $('#pHeader').css({'opacity':'0','margin-top':'50px'}); $('#hHeader').css({'fontSize':'22px','top':'10px','margin':'none','textAlign':'left','left':'10px'});
        $('#submenu-link').show(700);
    } else {      
        $('#submenu-link').hide(20); $('#header').css({'height':'150px','borderBottom':'20px solid #DEB887'});
        $('#pHeader').css({'opacity':'1','margin-top':'100px'});    $('#hHeader').css({'fontSize':'33px','top':'30px','margin':'none','textAlign':'center','left':'0'});
    }

}


// switch tab of data
var tab = document.querySelectorAll("#table div");
    var page = tb = null;
    
    
    for(var i=0;i<tab.length;i++) {
        
        tab[i].addEventListener("click", function(e){
        if(page!==null) {
            document.getElementById(page).style.display = 'none';
            tb.target.style.backgroundColor = "white";
            tb.target.style.color = "black";
        }
         
        tb = e;   
        page = e.target.dataset.page;                   
        document.getElementById(page).style.display = "block";
        e.target.style.backgroundColor = "#444";
        e.target.style.color = "white";
         
        },false);
    }


// TABLE OF LESSONS IMAGES   
var lessonsTable = ['1014','1023','1024','1051','1059','1060','1068','1073','1075','1080','1081','1082'];

// TABLE OF BADGES IMAGES  
var badgesTable = ['73','89','98','71','58','63','72','77','81','97','95','88','80','90','85','91','68','70','76','94','69','93','84','57','67','59.','83','75','62','60','103','56'];

var badgeCorrespondant = ['The player','Illuminator','Code master','Epic !','Course master','Master','Gaining experience','Great question','Question ninja','Coder','Developer','Teacher','Question master','Self learner','Great answer','Contributor','Challenge master','Unbeatable !','Good question','Junior','Rising Star','Intern','Good answer','Hat trick','On your way to fame','Achiever','Answerer','Asker','Just getting started','Good citizen','Engage In','Verified account'];


// TABLE OF CODES
var codesTable = ['Gold rank','[Help] Snake','[Lord Krishna]Color change','ColorSwitch','Best converter decimal / binary','Jquery.media','OddEven','Thanks everybody','Import SQL by php','Bigger or Smaller','Contact me'];

// their appropriate link
var linkToCode = ['WC4Ncb88P3rB/#html','cm3iv27Bqzoi/#java', 'WMyQ9doNRsEg/#html','Wlk0fRHuaP3P/#html','WXAJCYfolJFE/#html','Wcp5NFnYh4mm/#html', 'W8xtwk7OBy18/#html','WSogHSap6mM4/#html','wq31DaowT6uF/#php','WSro7xCg5zHB/#html', 'WP9e696RYJt3/#html'];



// TABLE OF FOLLOWERS IMAGES
var followersTable =['Hello1','Mayur Mallya','XinYaanZyoy','Brosla','Geeta P Jerkal','Геннадий Гаврилюк','Igor Adamchuk','Mwangicj','I. Prabha','Ben Harp','мαנє∂ αмιη','André du Preez','Muulkie S','A.J. Gramata','Megan Quinn','Saikrishna Thatikonda','Morgan Lee','Mohamad Selim','Core','ʎʇɹ ʍb','Rumike d','Thomas','👻 Kayla X Ren 👻','Humayun MHA','Jedi191 - Khalifah Ibn Sabiyl','Egi Shehu','Ahmed AbdeIrahman','Remy','Fitri','jeswanth','AGMeteor','Johnny 💪','Manpreet','Linda Dawkins','Lord Krishna','Andrew Harchenko (Tomsk)','Mohammed Hussein','Russel Reeder','Son Goku','Brooke','Monther Almasdor','Santhoshkumar','Abbas Ajmal','Denys Choban','Fazil','Iyke Okey','MacDev','Volts','Riyad Arshad','Nabarup Ghosh','Louis','Sergio Araya Villalobos','Automation','Novich','SHAHSAIN','Tasfia Islam Esha','Raphael Gallais Pou','WQTM','Carlos Castro','B.M.','Erik Isakov','Ashif Tanweer','Abdelilah Mhanni','Genes Sambayena','Ice~👑Queen','#00FF00','Sharingan tv 973','akpan ifiokobong','Kelvin Odier','Anand','Sahil Singh','~ Dragon ~','カンタンジャヌエル'];

var imageFollowers = ['','fde98b59-8ee5-4bfd-94ad-66903f411950.jpg','1cab9aa2-fcfd-47e0-90b1-31058e53c2a1.jpg','23cc6bbb-dc30-4ccd-965e-2e6a61abc24f.jpg','2ce49c16-71f2-4ac8-9c6d-cc01d99df55f.jpg','a5fbbf09-6ba0-43e6-9aba-c0944bb5c48d.jpg','a3872b82-0f36-43fa-8ed3-c77038495fc7.jpg','c8fe54e7-6080-4497-b9a8-5055ec58e707.jpg','abfac72d-6941-4990-b5d8-8022281b5c3f.jpg','a322c4c0-b61a-4d96-a575-454bc78fe159.jpg','3653d848-309b-492b-a902-0d34778aea50.jpg','3af5c1eb-6b25-4989-afcb-3df21cf5b699.jpg','6940a3e4-f99f-490a-bdd4-d1390ea4e066.jpg','31f7dc6a-df3c-4703-a82b-547a0661e33d.jpg','0f697a94-f1cc-47d8-9bb2-8149ec4565e7.jpg','3177dd54-f41b-4293-b94d-8c167dda0710.jpg','','0ed7fa05-d79d-475c-bbda-25bd2c7b8a7a.jpg','f8308c68-1029-46ab-8578-3f4b36f304ff.jpg','cdbe5324-80b3-40c2-bc05-4575c8f0ba37.jpg','7a4d29ef-dea5-4c9e-8739-27b3cc879dc0.jpg','8cf8fb54-9cc4-4c8a-9023-c8e9e5f16d6d.jpg','55ab76ef-bcac-4c43-b299-0dd825bbf9b6.jpg','ca5cb40b-da8b-4dd4-aa6d-390a9d9414ab.jpg','aff7c5f3-1aba-4ccc-97b3-8702eb7a6092.jpg','350ebd40-f0fc-4879-b8d5-379df76a6038.jpg','45be9e06-1867-43dd-b60c-f42262a51822.jpg','e0ef0d3b-6ad2-4b3a-9276-3decb4df64f7.jpg','c428c646-070b-43f5-9c50-12ceb33e4213.jpg','131c8958-e228-4748-92bc-0921998e6adb.jpg','b2078a87-e447-4b97-a234-1c94c766d742.jpg','fe014325-1b57-41fe-9d37-b172fd1cdbef.jpg','8b83ec5e-dd73-43d2-a590-05fc8149c7f7.jpg','0d4b88d9-c686-40f5-89fb-931dd438219e.jpg','424f3785-a76c-4fc7-a933-0ce3b830c85f.jpg','9a6c453c-dc60-4f7e-b7a0-008cf071e132.jpg','2be990f5-2a4b-4979-8e3b-ae36bc2a3d32.jpg','286d6d00-485e-487a-8791-72ce6a904a06.jpg','5848746d-8a25-4db9-a249-59952604d404.jpg','68c5a1fa-3fbb-4a53-9e86-fd5f5b68b950.jpg','4df876f6-de92-4517-8da1-cabf602e593e.jpg','8a6fa9ed-cd38-4469-a3f8-a78bf789b71a.jpg','62015852-4820-41ee-a100-5724ed3e49ea.jpg','29b0731b-e559-49e9-892a-0115b6ef102c.jpg','59b4ed2f-2237-4ae9-8e90-c8de8198bef1.jpg','e274fd3d-dc96-4f6e-84f0-5a755e0a7dc0.jpg','','7aa43e99-36fa-4ce3-aa7b-b1296cf5c138.jpg','4f9859ed-7a7c-431e-814f-46e5278002d6.jpg','354c0430-ce66-4a4a-bf03-7f9521f20032.jpg','68ec4c91-f733-4394-aef3-65112ddea092.jpg','59401d9a-3c47-49a3-839a-178c03b068cb.jpg','','b299cd32-b7a7-4d26-8146-a776f4100f5d.jpg','73326aae-a34b-435c-9756-b0a320ca2c6a.jpg','a3a48cef-2b6e-4760-89a7-ce5fea86a9bc.jpg','c6dc05a1-3f9c-48cf-a7ac-4c13d32acb5d.jpg','27b070cc-393c-4952-ba7d-9fc627a37c42.jpg','bd7946a7-36f6-4f2a-824c-688374d6eb9f.jpg','261edcff-7006-4849-b0c8-6a347c6c4097.jpg','dd4deda1-c7f3-41c8-8166-b1a5fe8e2406.jpg','17820430-9b3e-4be8-898a-635b2fcbda0d.jpg','c220b0b6-74fe-45c2-95cd-c505faef8702.jpg','be749ff0-0bf1-4d01-b72e-ca76eaa758b5.jpg','f0bc5a6c-9c66-4592-96b3-e52632286be8.jpg','7289d9c1-5897-41ac-bf1f-841358cc1c6f.jpg','0b599193-8831-42a7-aa2a-4053202805a1.jpg','27eae131-ee93-407c-b1b3-2527c53ee0d2.jpg','c959009d-99a4-4eeb-b2f1-57bd6c34d8ca.jpg','a4c1dbab-e55a-4303-ab67-7de8f50fdb21.jpg','65378795-5387-4de2-88c5-d1a9b5e47539.jpg','4aecfc3c-4a1f-447f-9014-f66cac5eed94.jpg','da5e3e12-3588-4d74-b2a9-7d777892194a.jpg'];

// TO CREAT TABLE

var lengthTable1 = (lessonsTable.length);    
  for(i=0; i<lengthTable1; i++){
      $('#table1').append("<tr><td><img src='https://www.sololearn.com/Icons/Courses/"+lessonsTable[i]+".png'alt='"+lessonsTable[i]+"'/></td><td class='certifiate'>certifiate</td></tr>");
  }  
  
var lengthTable2 = (badgesTable.length);    
  for(i=0; i<lengthTable2; i++){
      $('#table2').append("<tr><td><img src='https://api.sololearn.com/Uploads/Achievements/"+badgesTable[i]+".png'/></td><td><span>"+badgeCorrespondant[i]+"</span></td></tr>");      
  }    
  
var lengthTable3 = (codesTable.length);    
  for(i=0; i<lengthTable3; i++){
      $('#table3').append("<tr><td><a href='https://code.sololearn.com/"+linkToCode[i]+"'>"+codesTable[i]+"<img src='https://s26.postimg.org/4kuj361s9/1505404776578.png' alt=''/></a></td></tr>");
  }
  
var lengthTable4 = (followersTable.length);    
  for(i=0; i<lengthTable4; i++){
      if(imageFollowers[i] == '') {
         $('#table4').append("<tr><td class='tdf'><div style='background-image:url(https://www.sololearn.com/Images/NoAvatar.jpg);'></div><span>"+followersTable[i]+"</span></td></tr>");
      } else {
      $('#table4').append("<tr><td class='tdf'><div style='background-image:url(https://www.sololearn.com/avatars/"+imageFollowers[i]+");'></div><span>"+followersTable[i]+"</span></td></tr>");
      }
  }
  
  $('#delete').click(function() {
      $('.honor').css({'display':'none'});
  });
  
  
  $('#submenu-link').click(displayMenu);
  $('#comeback').click(displayPage);
  
  function displayMenu() {
      $('#sub-Menu').css({'display':'block','width':'100%'});      
      $('.page').css({'display':'none'});
      alert('PC : Use up arrow\nPhone : Tap on the screen\n(Adapte for phone only)');   
      flappyBird();
  }
  
  function displayPage() {
      $('#sub-Menu').css({'display':'none','width':'100%'});
      $('.page').css({'display':'block'});
      flappyBird();
  }
  

  
/////////////////
// FLAPPY BIRD //
/////////////////

       
      ///
    //  //
    //  //
/////   //
//      ///////
//   //       //
//          ///
//          ////
//           //
//////////////

function flappyBird() {

//Use up arrow to play
"use strict";

    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;
    var x = 40;
    var y = canvas.height/2;
    var r = 15;
    var gravity = 0.3;
    var velocity = 0;
    var upPressed = false;
    var pipes = [];
    var opening = [];
    var time = 0;
    var score = 0;
    var wait = 0;
    var list = [0];
    var clr = '#DEB887';
    
    function controls() {

        document.addEventListener("keydown", downHandler);
        document.addEventListener("keyup", upHandler);
        document.addEventListener("touchstart", ok);
        
        function downHandler(e) {
            
            if (e.keyCode === 38) {
                
                upPressed = true;
                
            }
            
        }
        
        function upHandler(e) {
            
            if (e.keyCode === 38) {
                
                upPressed = false;
                
            }
            
        }
        
    }
    
    function ok() {
       
       velocity = -6;
        
    }
    
    function drawPipes() {
        
        var x = canvas.width;
        var y = 0;
        var speed = 5;
        var bx = canvas.width-1;
        var by = Math.floor(Math.random() * 200) + 75;
        var pw = 20;
        var bw = 22;
        var ph = canvas.height;
        var bh = 100;
        
        if (time%70 <= 0) {
            
            pipes.push({"x": x, "y": y, "s": speed, "w": pw, "h": ph});
            opening.push({"x":bx, "y": by, "s": speed, "w": bw, "h": bh});
            
        }
       
    }
    
    function trackPipes() {
   
        drawPipes();
        
        ctx.save();
        
        for (var i = 0; i < pipes.length; i++) {
                
               ctx.fillStyle = clr;
               ctx.fillRect(pipes[i].x-=pipes[i].s*0.5, pipes[i].y, pipes[i].w*2, pipes[i].h);

            if (pipes[i].x < -200) {
                
                pipes.splice(i, 1);
                
            }
            
        }
        
        for (var j = 0; j < opening.length; j++) {
            
                ctx.fillStyle = "#FFE4C4";
                ctx.fillRect(opening[j].x-=opening[j].s*0.5, opening[j].y, opening[j].w*2, opening[j].h);

            if (opening[j].x < -200) {
                
                opening.splice(j, 1);
                
            }

            if (y-r < opening[j].y || y+r > opening[j].y+opening[j].h) {
                
                if (x > opening[j].x && x < opening[j].x+opening[j].w) {
                    
                    if (score > 0) {
                        
                        list.push(score);
                        
                    }
                
                    score = 0;
                    
                    clr = '#444';
                    
                    if (x > opening[j].x+15) {
                        
                        clr = '#DEB887';
                        
                    }
                
                }
                
            } else if (y > opening[j].y && y+r < opening[j].y+opening[j].h && x > opening[j].x && x < opening[j].x+2.5) {
                
                score++;
                
            }
            
        }
        
       ctx.restore();
        
    } 
    
    function bird() {
        
        ctx.beginPath();
        ctx.fillStyle = "#DEB887";
        ctx.arc(x, y, r, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();

    }
    
    function moveBird() {
        
        velocity+=gravity;
        y+=velocity;
        
        if (y >= canvas.height-r) {
            
            y = canvas.height-r;
            
        } else if (y+r <= r) {
            
            y = r;
            
            if (y !== r) {
                
                y = r;
                
            }
            
        }
        
        if (upPressed) {
            
            velocity = -5;
            
        }
        
    }
    
    function drawText() {
        
        var m = Math.max.apply(null, list);
        
        ctx.font="20px Open Sans";
        ctx.fillStyle = "#444";
        ctx.fillText("Score: " + score, 270, 20);
        ctx.fillText("          Highscore: " + m, 10, 20);
        
    }
    
    function draw() {
    
        ctx.clearRect(-222, -10, w+222, h+10);
        
        if (wait >= 10) {
            
            ctx.save();
            
           //ctx.rotate(Math.PI/16);
        
            controls();
            trackPipes();
            bird();
            moveBird();
            drawText();
            
            ctx.restore();

        }
        
    }
    
    function update() {
        
        time++;
        
        wait++;
        
        draw();
    
        requestAnimationFrame(update);
        
    }
    
    update();
    
 
}
 
});