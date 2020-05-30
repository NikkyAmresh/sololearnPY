// Created by Utkarsh

alert("Click to turn on and off\nDont forget to scroll down\n|\n|\n*Update-Lights Switch");
//initialisation
var b0=document.getElementsByClassName("ball_0");
var b1=document.getElementsByClassName("ball_1");
var b2=document.getElementsByClassName("ball_2");
var back0=
document.getElementsByClassName("backPart_0");
var back1=
document.getElementsByClassName("backPart_1");
var back2=
document.getElementsByClassName("backPart_2");
var t1=document.getElementsByClassName("text_1");
var t2=document.getElementsByClassName("text_2");
var t3=document.getElementsByClassName("text_3");
var t4=document.getElementsByClassName("text_4");
var t5=document.getElementsByClassName("text_5");
var t6=document.getElementsByClassName("text_6");
var t7=document.getElementsByClassName("text_7");
var t8=document.getElementsByClassName("text_8");

var li_1a=document.getElementsByClassName
("line_1a");
var li_1b=document.getElementsByClassName
("line_1b");
var li_2a=document.getElementsByClassName("line_2a");
var li_2b=document.getElementsByClassName("line_2b");
var li_3a=document.getElementsByClassName("line_3a");
var li_3b=document.getElementsByClassName("line_3b");
var LA1a=
document.getElementsByClassName("lineArrow_1a");
var LA1b=
document.getElementsByClassName("lineArrow_1b");
var LA1c=
document.getElementsByClassName("lineArrow_1c");

var LA2a=
document.getElementsByClassName("lineArrow_2a");
var LA2b=
document.getElementsByClassName("lineArrow_2b");
var LA2c=
document.getElementsByClassName("lineArrow_2c");
var box_1=
document.getElementsByClassName("box_1");

//lights switch
function leftRight_0(){

  if(b0[0].style.left==="-15%"){
  
 b0[0].style.left="50%";
 b0[0].style.backgroundColor="rgb(240,240,240)"; back0[0].style.backgroundColor="rgb(200,200,200)";
 body.style.backgroundColor="#fefefe";
       }else{
       
       b0[0].style.left="-15%";
back0[0].style.backgroundColor="#222";
b0[0].style.backgroundColor="#555";
body.style.backgroundColor="#444";
       }
   }



//left right switch 1
   function leftRight_1(){

  if(b1[0].style.left==="50%"){
 b1[0].style.left="-15%";
 b1[0].style.backgroundColor="rgb(240,240,240)"; back1[0].style.backgroundColor="rgb(150,150,150)";
  t1[0].innerHTML="OFF";
       }else{
       
       b1[0].style.left="50%";
back1[0].style.backgroundColor="rgb(150,200,200)";
b1[0].style.backgroundColor="teal";
 t1[0].innerHTML="ON";
       }
   }
//left right switch 2
   function leftRight_2(){

  if(b2[0].style.left==="59.5%"){
  
      b2[0].style.left="5%";      back2[0].style.backgroundColor="rgb(150,150,150)"
      
      t2[0].innerHTML="OFF";
       }else{
       b2[0].style.left="59.5%";
       back2[0].style.backgroundColor=
       "rgb(100,150,215)"
       t2[0].innerHTML="ON";
       }
   }
 //add remove style 1
 function addRem_1(){
   if(li_1a[0].style.transform==="rotate(45deg)"){
   
       t3[0].innerHTML="ADD";
    li_1a[0].style.transform="rotate(0deg)";
    li_1b[0].style.transform="rotate(90deg)";
    
    }else{
       t3[0].innerHTML="REMOVE";
    li_1a[0].style.transform="rotate(45deg)";
    li_1b[0].style.transform="rotate(135deg)";
    }
 }
//add remove style 2
  function addRem_2(){
   if(li_2a[0].style.transform==="rotate(45deg)")
        {
       t4[0].innerHTML="ADD";
    li_2a[0].style.transform="rotate(0deg)";
    li_2b[0].style.transform="rotate(90deg)";
    
    }else{
       t4[0].innerHTML="REMOVE";
    li_2a[0].style.transform="rotate(45deg)";
    li_2b[0].style.transform="rotate(-45deg)";
    }
 } 

//add remove style 3
  function addRem_3(){
   if(li_3a[0].style.transform==="rotate(315deg)") {
       t5[0].innerHTML="ADD";
    li_3a[0].style.transform="rotate(0deg)";
    li_3b[0].style.transform="rotate(90deg)";
    
    }else{
       t5[0].innerHTML="REMOVE";
    li_3a[0].style.transform="rotate(315deg)";
    li_3b[0].style.transform="rotate(225deg)";
    }
 }
 
 
 //arrow style 1
function arrow_1(){
if(LA1b[0].style.left==="15%"){

  t6[0].innerHTML="OPTIONS";
LA1a[0].style.left="10%";
LA1c[0].style.left="10%";
LA1a[0].style.transform="rotate(0deg)"; LA1b[0].style.left="10%"; LA1c[0].style.transform="rotate(0deg)";
LA1a[0].style.width="120px";
LA1c[0].style.width="120px";

       }else{
    
  t6[0].innerHTML="BACK";
LA1a[0].style.transform="rotate(-45deg)";
LA1a[0].style.width="110px";
LA1c[0].style.width="110px";
LA1a[0].style.top="20.5%";
LA1c[0].style.top="49.5%";
LA1a[0].style.left="0%";
LA1c[0].style.left="0%";
LA1b[0].style.left="15%";
LA1c[0].style.transform="rotate(45deg)";

       }
}

//arrow style 2
function arrow_2(){
if(LA2c[0].style.top==="28%"){

 t7[0].innerHTML="OPTIONS";
LA2a[0].style.top="17.5%";
LA2a[0].style.transform="rotate(0deg)"
LA2b[0].style.transform="rotate(0deg)";
LA2c[0].style.top="52.5%";
LA2c[0].style.transform="rotate(0deg)";

     }else{
     
  t7[0].innerHTML="CLOSE";
LA2a[0].style.top="45%";
LA2a[0].style.transform="rotate(45deg)"
LA2b[0].style.transform="rotate(-45deg)";
LA2c[0].style.top="28%";
LA2c[0].style.transform="rotate(45deg)";


       }
}
function check_1(){
   if(box_1[0].style.transform==="rotate(45deg)")
   {
   
    box_1[0].style.transform="rotate(0deg)";
    box_1[0].style.border="10px solid black";
 /*   box_1[0].style.borderTop="0px";
    box_1[0].style.borderLeft="0px";*/
    box_1[0].style.width="100%";
    box_1[0].style.height="100%";
     t8[0].innerHTML="UNCHECKED";
    
   }else{
   
    box_1[0].style.transform="rotate(45deg)";
    box_1[0].style.border="10px solid rgb(50,150,50)";
    box_1[0].style.borderTop="0px";
    box_1[0].style.borderLeft="0px";
    box_1[0].style.width="70%";
    box_1[0].style.height="130%";
    t8[0].innerHTML="CHECKED";
}  
    
}
