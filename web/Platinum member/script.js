// Created by Jerick Cabase

var xps=0;
    var t1=setInterval(t,0.1);
    
    function t() 
          {
          var xp=document.getElementById("loader");
          var xp1=document.getElementById("text");
          var lvl=document.getElementById("level");
          var stw=document.getElementById("st");
          var b="https://lh3.googleusercontent.com/-GSahkO3q0mU/WWMK5JvZCiI/AAAAAAAAATA/TUUoGZLSV-cNpfiWXlnQk9pfBt5FnXArACJoC/w981-h954-n-rw/b.jpg";
          var s="https://lh3.googleusercontent.com/-mnuVRLKIR5Q/WWMK5MGiSdI/AAAAAAAAATI/PojmB-itu1Ak3g0dY-UdWv_JbVHC_lIMwCJoC/w954-h954-n-rw/s.jpg";
          var g="https://lh3.googleusercontent.com/-TAJ1h_VKMIE/WWMK5L41MUI/AAAAAAAAATM/0saWPfDx4XUk3qAFIRXlVH87DRs8Q9AmgCJoC/w969-h954-n-rw/g.jpg";
          var p="https://lh3.googleusercontent.com/-hHBqVm35C9s/WWMK5JUK2uI/AAAAAAAAATE/gNWyKelgLUoUqTXQ8eIOrRjavmt2Gko2gCJoC/w912-h954-n-rw/p.jpg";
            if (xps >= 20400) 
            {
              clearInterval(t1);
              alert("😊");
              xp1.innerHTML="20000xp";
            } 
            else 
            {
              xps=xps+18; 
              var levl, st ;
              
    if (xps>=0 && xps<50){
        levl=1;
        st="y";
        }
    else if (xps>=50 && xps<150){
        levl=2;
        st="0";
        }
    else if(xps>=150 && xps<300){
          levl=3;
          st="0";
        }
    else if(xps>=300 && xps<500){
        levl=4;
        st="0";
        }
    else if(xps>=500 && xps<1000){
        levl=5;
        st=b;
         }
        else if (xps>=1000 && xps<2000){
          levl=6;
          st=b;
         }
        else if (xps>=2000 && xps<3000){
        levl=7;
        st=s;
         }
        else if (xps>=3000 && xps<4000){
        levl=8;
        st=s;
         }
        else if (xps>=4000 && xps<5000){
          levl=9;
          st=s;
         }
        else if (xps>=5000 && xps<6500){
        levl=10;
        st=g;
         }
        else if (xps>=6500 && xps<8000){
        levl=11;
        st=g;
         }
        else if (xps>=8000 && xps<10000){
          levl=12;
          st=g;
         }
        else if (xps>=10000 && xps<13000){
        levl=13;
        st=g;
         }
        else if (xps>=13000 && xps<15000){
        levl=14;
        st=g;
        }
        else if (xps>=15000 && xps<20000){
          levl=15;
          st=g;
        }
        else if (xps>=20000 && xps<100000){
        levl=16;
        st=p;
        }
    else{
        levl="7";
        st="h";
}
              
              lvl.innerHTML="Level "+levl;
              xp.style.width=100*(xps/20400)+"%";
              xp1.innerHTML=xps+"xp";
              stw.innerHTML="<img src='"+st+"' >";
             if (xps<500){
             document.getElementById("st").style.opacity=0;
             xps=xps-16
              }
             else{
                 document.getElementById("st").style.opacity=1;
             }
              }
    
}

