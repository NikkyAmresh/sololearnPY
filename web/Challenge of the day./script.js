n=prompt("Enter the number ");
var n2e3, n5e2, n1e2, n5e1, n2e1, n1e1, n5, n2, n1 ;
function CHOTD(n){
    if(n%2e3!=0){
        n2e3=Math.floor(n/2e3);
   var  n2e3r=n2e3%2e3;
       if(n2e3r%5e3!=0){
           n5e2=Math.floor(n2e3r/5);
    var n5e2r=n5e2%5e2;
        
       }else{
           n5e2=0;
       }
      }
      else{
        n2e3=0;
      }
      document.writeln(n2e3);
      document.writeln(n5e2);
}
CHOTD(n);