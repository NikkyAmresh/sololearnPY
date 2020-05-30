var b=[["wr1","wn1","wb1","wk","wq","wb","wn","wr"],    
       ["wp0","wp1","wp2","wp3","wp4","wp5","wp6","wp7"],
       [" "," "," "," "," "," "," "," "],
       [" "," "," "," "," "," "," ","h"],
       [" "," "," "," ","k"," "," "," "],
       [" "," "," "," "," "," "," "," "],
       ["bp0","bp1","bp2","bp3","bp4","bp5","bp6","bp7"],
       ["br1","bn1","bb1","bk","bq","bb","bn","br"]]
$(function(){
    
   // print(getpos(b,"wr"));
});
var legMove={
 // wr:b[getpos(b,"wr")[0]][i],
 // wr1:b[i][getpos(b,"wr")]
}
print=function(a){console.log(a)}
function isInArray(x, y) { return x.indexOf(y) > -1; }
function getpos(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i].indexOf(k);
    if (index > -1) {
      return [i, index];
    }
  }
}
function remLeg(x,y){
    var index = x.indexOf(y); if (index > -1) { x.splice(index, 1); }
}
function legMoveRook(b,r){
var leg=[];
var x,y;
for(var i=0;i<8;i++){
    x="b["+getpos(b,r)[0]+"]["+i+"]";
    y="b["+i+"]["+getpos(b,r)[1]+"]";
    if(!isInArray(leg,x)&&eval(x)==" "){
        leg.push(x);
    }else{
        remLeg(leg,x);
    }
    if(!isInArray(leg,y)&&eval(y)==" "){
        leg.push(y);
    }else{
        remLeg(leg,y);
    }
}    
   /* x=getpos(r)[0];
    y=getpos(r)[1];
    for(var i=x+1;i<8;i++){
        for(var j=y+1;j<8;j++){
            if(b[i][j]!=" ")
        }
    }*/
    var m,o;
    var newl=[];
 //  for(var i=0;i<leg.length;i++){
 var i=8;
        m=[leg[i][2],leg[i][5]];
        o=[getpos(b,r)[0],getpos(b,r)[1]];
       // print(b[m[0]][m[1]]);
        x=m[0],y=o[0];
        var st="";
        var rng=range(x,y);
        print(m)
        print(rng)
           for(var j=0;j<rng.length;j++){
               st=st+"b[rng["+j+"]][m[1]]==' '";
                   if(j<rng.length-1){
                       st=st+"&&";
                   }
               }
               print(st)
               if(eval(st)){
                   newl.push(leg[i]);
               }
            
        
  //  }
    print(leg)
    print("-----")
    return newl;
}

function range(x,y){
var arr=[];
    if(x<y){
        while(x<y){
            arr.push(x++);
        }
    }else{
        while(y<x){
            arr.push(y++);
        }
    }
    return arr;
}
print(legMoveRook(b,"h"))
