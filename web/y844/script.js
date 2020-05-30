// Created by Gavin Christians

$(function (){
    alert("-For best experience, use your earphones.\n-Audio may take a little moment to load after you've clicked on the GGC Logo.");
//------foundation for code------//
//declaring variables
var body;
var box;
var canvas;
var play;
var img;
var main;
var text;
var track;
    track = new Audio("http://ggcprojekt.000webhostapp.com/Shiny/pkmgogymtheme.mp3");
/*var charCry;
    charCry=new Audio("http://ggcprojekt.000webhostapp.com/Shiny/charcry.mp3");*/
var $tate=new Array();
for(g=0;g<268;g++){
    $tate[g]=false;
}
    $tate[0]=true;
var currX=0;
var currY=0;
var diffX=0;
var diffY=0;
var changeX=0;
var changeY=0;
var speed=4;
//equals to 60 frames per second
var fps = (1000/60);

function createWorld(){
    //create elements
    body = $("body");
    box = $("<div></div>");
    canvas = $("<canvas width='340' height='490'></canvas>");
    play = $("<div></div>");
    img = $("<div></div>");
    text = $("<p></p>");
    troubleshoot = $("<p></p>");
    //apply css
    body.css({
        "text-align":"center",
        "background-color":"#333B40"
    });
    box.css({
        "width":"340px",
        "height":"340px",
        "background-color":"#333B40",
        "opacity":"1",
        "display":"inline-block",
        "position":"relative"
    });
    canvas.css({
        "width":"340px",
        "height":"490px",
        "background-color":"none",
        "position":"absolute",
        "left":"0",
        "z-index":"0"
    });
    play.css({
        "width":"150px",
        "height":"150px",
        "background-color":"none",
        "background-image":
        "url('http://ggcprojekt.000webhostapp.com/Shiny/ggclogo.png')",
        "background-size":"cover",
        "border-radius":"50%",
        "position":"absolute",
        "top":"170px",
        "left":"95px",
        "z-index":"4"
    });
    img.css({
        "width":"340px",
        "height":"340px",
        "background-color":"none",
        "background-image":
        "url('http://ggcprojekt.000webhostapp.com/Shiny/shiny.png')",
        "transition":"opacity 4s ease-in",
        "-webkit-transition":"opacity 4s ease-in",
        "opacity":"0",
        "background-size":"cover",
        "position":"absolute",
        "top":"0px",
        "left":"0px",
        "z-index":"1"
    });
    text.css({
        "width":"340px",
        "color":"white",
        "font-size":"30px",
        "background-color":"none",
        "opacity":"1",
        "position":"absolute",
        "top":"340px",
        "left":"0px",
        "z-index":"1"
    });
    troubleshoot.css({
       "text-align":"left",
       "background-color":
       "rgba(255,255,255,0.5)",
       "color":"darkred",
       "position":"absolute",
       "top":"0px",
       "left":"0px",
       "z-index":"3"
    });
    //elements to DOM
    body.append(box);
    box.append(img);
    box.append(text);
    box.append(canvas);
    box.append(play);
    box.append(troubleshoot);
}
createWorld();

//create runtime
var ggc = canvas[0].getContext('2d');
function paint(){
    ggc.fillStyle="#333B40";
    ggc.clearRect(0,0,340,490);
    ggc.strokeStyle="white";
    //left arm
    if($tate[0]==true){
    ggc.beginPath();
        move(166,152,1);
        curve(173,157,178,163,2);
        curve(197,172,200,180,3);
        curve(211,188,220,196,4);
        curve(234,202,247,214,5);
        move(186,192,6);
        curve(192,197,211,206,7);
        curve(224,218,234,223,8);
    ggc.stroke();
    }
    //right arm
    if($tate[9]==true){
    ggc.beginPath();
        move(120,159,10);
        curve(101,167,90,179,11);
        curve(80,187,68,196,12);
        curve(58,200,46,208,13);
        move(104,192,14);
        curve(94,200,81,206,15);
        curve(73,212,65,218,16);
    ggc.stroke();
    }
    //left side
    if($tate[17]==true){
    ggc.beginPath();
        move(186,192,18);
        curve(178,205,187,219,19);
        curve(204,263,193,284,20);
    ggc.stroke();
    }
    //right side
    if($tate[21]==true){
    ggc.beginPath();
        move(104,192,22);
        curve(90,220,87,231,23);
        curve(76,249,73,282,24);
        curve(77,299,96,296,25);
        curve(109,289,118,276,26);
    ggc.stroke();
    }
    //belly
    if($tate[27]==true){
    ggc.beginPath();
        move(107,266,28);
        curve(117,279,135,281,29);
        curve(153,282,165,276,30);
    ggc.stroke();
    }
    //tail
    if($tate[31]==true){
    ggc.beginPath();
        move(182,204,32);
        line(190,194,33);
        move(197,176,34);
        curve(199,166,193,149,35);
        move(173,114,36);
        line(166,103,37);
        move(193,236,38);
        curve(208,224,217,210,39);
        move(221,197,40);
        curve(227,164,209,136,41);
        move(182,106,42);
        line(172,98,43);
    ggc.stroke();
    }
    //left hand
    if($tate[44]==true){
    ggc.beginPath();
        move(247,214,45);
        curve(256,221,263,226,46);
        curve(275,230,273,240,47);
        curve(274,244,273,251,48);
        curve(270,248,265,250,49);
        line(265,245,50);
        curve(254,230,242,234,51);
        curve(242,238,239,240,52);
        curve(236,237,231,238,53);
        curve(232,229,234,223,54);
    ggc.stroke();
    }
    //right hand
    if($tate[55]==true){
    ggc.beginPath();
        move(46,208,56);
        line(37,211,57);
        line(28,212,58);
        curve(22,216,21,222,59);
        curve(10,227,10,235,60);
        curve(16,233,17,239,61);
        curve(20,238,21,233,62);
        curve(29,231,38,228,63);
        curve(47,228,50,226,64);
        curve(55,229,52,237,65);
        curve(58,234,64,236,66);
        curve(66,226,65,218,67);
    ggc.stroke();
    }
    //left foot
    if($tate[68]==true){
    ggc.beginPath();
        move(165,276,69);
        line(166,282,70);
        curve(163,287,166,293,71);
        curve(161,305,164,313,72);
        curve(169,314,171,316,73);
        line(175,311,74);
        line(178,318,75);
        line(187,317,76);
        line(189,310,77);
        line(194,313,78);
        line(200,310,79);
        curve(200,299,193,284,80);
    ggc.stroke();
    }
    //right foot
    if($tate[81]==true){
    ggc.beginPath();
        move(126,280,82);
        curve(126,292,123,300,83);
        line(116,302,84);
        line(113,294,85);
        line(110,299,86);
        line(101,299,87);
        line(101,293,88);
    ggc.stroke();
    }
    //head
    if($tate[89]==true){
    ggc.beginPath();
        move(154,141,90);
        curve(144,127,131,114,91);
        curve(126,105,118,96,92);
        line(135,76,93);
        curve(135,71,132,71,94);
        line(99,94,95);
        line(96,95,96);
        line(99,89,97);
        curve(97,86,93,86,98);
        line(79,101,99);
        curve(71,107,68,113,100);
        curve(69,116,70,119,101);
        curve(65,123,57,123,102);
        curve(55,125,55,131,103);
        curve(55,136,57,138,104);
        curve(60,139,68,140,105);
        curve(71,140,75,137,106);
        line(80,135,107);
        curve(85,134,93,130,108);
        curve(97,128,105,128,109);
        line(113,122,110);
        curve(114,127,112,137,111);
        curve(108,150,102,159,112);
        curve(100,163,97,164,113);
        curve(100,163,97,164,114);
        line(90,166,115);
        line(88,159,116);
        move(81,134,117);
        curve(88,143,88,168,118);
        curve(89,170,91,170,119);
        line(100,170,120);
        curve(103,171,106,168,121);
        curve(115,148,122,138,122);
        move(115,148,123);
        line(120,153,124);
        line(120,159,125);
    ggc.stroke();
    }
    //tongue
    if($tate[126]==true){
    ggc.beginPath();
        move(94,131,127);
        curve(89,141,90,154,128);
        curve(89,141,90,154,129);
        curve(91,156,91,163,130);
        curve(97,160,100,146,131);
        curve(100,143,114,126,132);
    ggc.stroke();
    }
    //left wing
    if($tate[133]==true){
    ggc.beginPath();
        move(154,141,134);
        curve(159,132,163,119,135);
        curve(193,108,196,53,136);
        line(184,38,137);
        line(186,37,138);
        line(197,41,139);
        curve(204,39,210,41,140);
        line(243,41,141);
        line(254,39,142);
        curve(270,47,293,55,143);
        curve(316,73,339,98,144);
        move(166,152,145);
        line(171,129,146);
        curve(205,108,204,54,147);
        curve(206,48,210,46,148);
        line(256,45,149);
        line(292,57,150);
        line(339,98,151);
        move(178,163,152);
        curve(217,119,254,129,153);
        curve(246,81,334,92,154);
    ggc.stroke();
    }
    //right wing
    if($tate[155]==true){
    ggc.beginPath();
        move(105,89,156);
        curve(103,69,107,32,157);
        line(113,23,158);
        line(112,21,159);
        line(104,25,160);
        curve(101,23,93,23,161);
        line(62,16,162);
        line(52,20,163);
        line(33,25,164);
        line(1,58,165);
        move(99,94,166);
        curve(97,71,98,34,167);
        curve(96,30,93,28,168);
        line(63,23,169);
        line(37,28,170);
        line(1,58,171);
        move(69,112,172);
        curve(59,108,55,110,173);
        curve(68,67,7,54,174);
    ggc.stroke();
    }
    //left fingernails
    if($tate[175]==true){
    ggc.beginPath();
        move(232,238,176);
        line(234,245,177);
        line(239,240,178);
        move(263,240,179);
        line(265,246,180);
        line(271,239,181);
        curve(266,235,263,240,182);
        move(266,249,183);
        line(269,257,184);
        line(273,250,185);
    ggc.stroke();
    }
    //right fingernails
    if($tate[186]==true){
    ggc.beginPath();
        move(11,234,187);
        line(11,243,188);
        line(17,238,189);
        move(23,219,190);
        line(24,227,191);
        line(30,223,192);
        curve(29,217,23,219,193);
        move(54,236,194);
        line(57,244,195);
        line(63,236,196);
    ggc.stroke();
    }
    //left toenails
    if($tate[197]==true){
    ggc.beginPath();
        move(164,313,198);
        line(167,322,199);
        line(171,316,200);
        move(180,318,201);
        line(184,324,202);
        line(186,317,203);
        move(194,312,204);
        line(198,317,205);
        line(199,310,206);
    ggc.stroke();
    }
    //right toenails
    if($tate[207]==true){
    ggc.beginPath();
        move(122,300,208);
        line(120,309,209);
        line(116,302,210);
        move(109,299,211);
        line(105,306,212);
        line(101,299,213);
    ggc.stroke();
    }
    //left wing forgotten part
    if($tate[214]==true){
    ggc.beginPath();
        move(204,51,215);
        curve(237,88,253,129,216);
    ggc.stroke();
    }
    //right wing forgotten part
    if($tate[217]==true){
    ggc.beginPath();
        move(97,34,218);
        curve(75,67,56,109,219);
    ggc.stroke();
    }
    //teeth
    if($tate[220]==true){
    ggc.beginPath();
        move(64,140,221);
        line(67,144,222);
        line(67,141,223);
        move(83,134,224);
        line(85,138,225);
        line(86,133,226);
        move(101,160,227);
        line(99,158,228);
        line(103,158,229);
    ggc.stroke();
    }
    //nostrils
    if($tate[230]==true){
    ggc.beginPath();
        move(55,130,231);
        line(56,126,232);
        line(58,130,233);
        line(55,130,234);
        move(69,126,235);
        line(69,122,236);
        line(75,122,237);
        line(69,126,238);
    ggc.stroke();
    }
    //flame
    if($tate[239]==true){
    ggc.beginPath();
        move(172,100,240);
        curve(171,95,174,93,241);
        curve(176,79,170,78,242);
        curve(170,74,166,73,243);
        curve(166,68,161,69,244);
        line(158,64,245);
        curve(147,66,137,61,246);
        curve(127,62,113,46,247);
        move(169,102,248);
        curve(161,100,151,103,249);
        curve(144,99,143,94,250);
        curve(146,89,143,86,251);
        line(143,83,252);
        curve(138,81,135,76,253);
        move(131,72,254)
        curve(125,69,118,60,255);
        curve(118,56,113,46,256);
    ggc.stroke();
    }
    //eye (!illuminati)
    if($tate[257]==true){
    ggc.beginPath();
        move(89,116,258);
        line(90,111,259);
        line(102,101,260);
        move(89,116,261);
        line(102,111,262);
        move(100,103,263)
        curve(103,106,102,111,264);
        move(94,108,265);
        curve(96,110,96,113,266)
    ggc.stroke();
    }
    if($tate[266]==true&&$tate[267]==false){
        clearInterval(main);
        setTimeout(flash,1000);
        $tate[267]=true;
    }
}

playCond=false;
$(play).on("click", function (){
    if(playCond==true){
        return;
    }
    playCond=true;
    loaded=setInterval(function (){
        track.play();
        if(track.currentTime>0.1){
            main=setInterval(paint,fps);
            play.css("display","none");
            clearInterval(loaded);
        }
    },50);
})

//function to move point
function move(x,y,z){
    if($tate[z]==true){
        ggc.moveTo(x,y);
        return
    }
    if($tate[z-1]==true&&$tate[z]==false){
        currX=x;
        currY=y;
        ggc.moveTo(x,y);
        $tate[z]=true;
        return
    }
}

//creates boolean conditions for each condition in line function
lineCond = new Array();
for(c=0;c<7;c++){
    lineCond[c]=false;
}
//Array that contains identifiers of each path that ends with a line
lineBreak = [43,88,125,185,196,206,213,229,238];
//function to draw lines
function line(x,y,z){
    if($tate[z]==true){
        ggc.lineTo(x,y);
        return
    }
    if($tate[z-1]==true&&$tate[z]==false){
        if(lineCond[0]==false){
            if(lineCond[1]==false){
                if(lineCond[2]==false){
                    diffX=x-currX;
                    changeX=((diffX/1000)*fps);
                    lineCond[2]=true;
                }
                if(lineCond[3]==false){
                    diffY=y-currY;
                    changeY=((diffY/1000)*fps);
                    lineCond[3]=true;
                }
                if(lineCond[2]==true&&lineCond[3]==true){
                    lineCond[1]=true;
                }
            }
            if(lineCond[1]==true&&lineCond[4]==false){
                if(lineCond[5]==false){
                    if(currX<x-2||currX>x+2){
                        currX+=changeX*speed;
                    }
                    else{
                        lineCond[5]=true;
                    }
                }
                if(lineCond[6]==false){
                    if(currY<y-2||currY>y+2){
                        currY+=changeY*speed;
                    }
                    else{
                        lineCond[6]=true;
                    }
                }
                if(lineCond[5]==true&&lineCond[6]==true){
                    lineCond[4]=true;
                }
                else{
                    ggc.lineTo(currX,currY);
                }
            }
            if(lineCond[1]==true&&lineCond[4]==true){
                lineCond[0]=true;
            }
        }
        if(lineCond[0]==true){
            ggc.lineTo(x,y);
            currX=x;
            currY=y;
            for(h=0;h<7;h++){
                lineCond[h]=false;
            }
            $tate[z]=true;
            for(v=0;v<lineBreak.length;v++){
                if(z==lineBreak[v]){
                    $tate[z+1]=true;
                    break;
                }
            }
            return
        }
    }
}

//creates boolean conditions for each condition in curve function
curveCond = new Array();
for(i=0;i<14;i++){
    curveCond[i]=false;
}
//Array that contains identifiers of each path that ends with a curve
curveBreak = [8,16,20,26,30,54,67,80,132,154,174,216,219,256];
//function to draw curves
function curve(x1,y1,x2,y2,z){
    if($tate[z]==true){
        ggc.quadraticCurveTo(x1,y1,x2,y2);
        return
    }    
    if($tate[z-1]==true){
        if(curveCond[0]==false){
            if(curveCond[1]==false){
                if(curveCond[2]==false){
                    diffX=x1-currX;
                    changeX=((diffX/1000)*fps);
                    curveCond[2]=true;
                }
                if(curveCond[3]==false){
                    diffY=y1-currY;
                    changeY=((diffY/1000)*fps);
                    curveCond[3]=true;
                }
                if(curveCond[2]==true&&curveCond[3]==true){
                    curveCond[1]=true;
                }
            }
            if(curveCond[1]==true&&curveCond[4]==false){
                if(curveCond[5]==false){
                    if(currX<x1-2||currX>x1+2){
                        currX+=changeX*speed;
                    }
                    else{
                        curveCond[5]=true;
                    }
                }
                if(curveCond[6]==false){
                    if(currY<y1-2||currY>y1+2){
                        currY+=changeY*speed;
                    }
                    else{
                        curveCond[6]=true;
                    }
                }
                if(curveCond[5]==true&&curveCond[6]==true){
                    curveCond[4]=true;
                }
                else{
                    ggc.quadraticCurveTo(currX,currY,currX,currY);
                }
            }
            if(curveCond[1]==true&&curveCond[4]==true){
                curveCond[0]=true;
            }
        }
        if(curveCond[0]==true&&curveCond[7]==false){
            if(curveCond[8]==false){
                if(curveCond[9]==false){
                    diffX=x2-currX;
                    changeX=((diffX/1000)*fps);
                    curveCond[9]=true;
                }
                if(curveCond[10]==false){
                    diffY=y2-currY;
                    changeY=((diffY/1000)*fps);
                    curveCond[10]=true;
                }
                if(curveCond[9]==true&&curveCond[10]==true){
                    curveCond[8]=true;
                }
            }
            if(curveCond[8]==true&&curveCond[11]==false){
                if(curveCond[12]==false){
                    if(currX<x2-2||currX>x2+2){
                        currX+=changeX*speed;
                    }
                    else{
                        curveCond[12]=true;
                    }
                }
                if(curveCond[13]==false){
                    if(currY<y2-2||currY>y2+2){
                        currY+=changeY*speed;
                    }
                    else{
                        curveCond[13]=true;
                    }
                }
                if(curveCond[12]==true&&curveCond[13]==true){
                    curveCond[11]=true;
                }
                else{
                    ggc.quadraticCurveTo(x1,y1,currX,currY);
                }
            }
            if(curveCond[8]==true&&curveCond[11]==true){
                curveCond[7]=true;
            }
        }
        if(curveCond[0]==true&&curveCond[7]==true){
            ggc.quadraticCurveTo(x1,y1,x2,y2);
            currX=x2;
            currY=y2;
            for(n=0;n<14;n++){
                curveCond[n]=false;
            }
            $tate[z]=true;
            for(a=0;a<curveBreak.length;a++){
                if(z==curveBreak[a]){
                    $tate[z+1]=true;
                    break;
                }
            }
            return
        }
    }
    else{
        return
    }
}
//crv=setInterval(curve,fps);
//paint();

//for troubleshooting
function testArea(){
    /*This function gets called at
      the very end of this script.*/
    $(troubleshoot).html(""+
        "Live troubleshoot:<br>"+
        "currX:"+currX+"<br>"+
        "currY:"+currY+"<br>"+
        "diffX:"+diffX+"<br>"+
        "diffY:"+diffY+"<br>"+
        "changeX:"+changeX+"<br>"+
        "changeY:"+changeY+"<br>"
    +"");
    
}
//---------------------------------//

//for live troubleshoot
//debug=setInterval(testArea,50);

chmod=false;
times=0;
function flash(){
    one=setInterval(function (){
        if(times>40){
            ggc.fillRect(0,0,340,490);
            img.css("opacity","1");
            setTimeout(write,4000);
            clearInterval(one);
            return
        }
        else{
            if(chmod==false){
                ggc.fillStyle="#333B40";
                ggc.fillRect(0,0,340,490);
                chmod=true;
            }
            else{
                paint();
                chmod=false;
            }
        }
        times+=1
    },100);
}

//writeCond=false;
function write(){
    /*track.pause();
    if(writeCond==false){
        cryLoad=setInterval(function (){
            charCry.load();
            charCry.play();
            if(charCry.currentTime>0.1){
                writeCond=true;
                write();
                clearInterval(cryLoad);
            }
        },50);
        return;
    }*/
    str="Charizard changed into a Shiny Charizard";
    pos=0
    type=setInterval(function (){
        if(pos<str.length){
            $(text).append(str[pos]);
            pos+=1
        }
        else{
            clearInterval(type);
        }
    },100)
}
//For functions that should execute when Sololearn tabs are switched.
window.onbeforeunload = function() {
  clearInterval(main);
  clearInterval(debug);
}

});
