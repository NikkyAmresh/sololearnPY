var n=0;
var x=0;
var y=0;
for(var i=0;i<178;i++){
if(i<10){
    n="00"+i;
}else{
    if(i<100){
        n="0"+i
    }else{
        n=i;
    }
}
if(i>156){
    x=800;
    y=1200;
}else{
if(i==4 || i==7 || i==8 || i==9 || i==11 || i==12 || i==14 || i==15 || i==16 || i==41 || i==45 || i==71 || i==102 || i==137 || i==141 || i==145 || i==153){
    x=1024;
    y=683;
}else{
    x=683;
    y=1024;
}}
    document.write("{ src: 'secure/context"+n+".pem', w: "+x+", h: "+y+" },");
}
