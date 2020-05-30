/*
autour :Nikky Amresh 
Challenger : K DOVE PLACE
DATE 31-07-17
*/
var x,arth,geo,input,ans;
alert("if series is in AP return Arithmetic \nif series is in GP return Geometric \nif neither AP nor GP return -1\nif series is empty return 0");
arth=0;
geo=0;
/*by default series  is empty*/
function aritgeo(input=""){
if(0===(input=prompt("Enter the series separated by commas")).length)
ans=0;
else{
/*converting input into an array*/
input=input.split(",");
//Checking each number from series
for(x=0;x<input.length-2;x++)
//different of two consecutive numbers in AP are always equal
input[x+1]-input[x]==input[x+2]-input[x+1]?
/*Counting one difference */arth++:
//Division of two consecutive numbers in GP are always equal
input[x+1]/input[x]==input[x+2]/input[x+1]&&
/*counting one division*/geo++;
/*checking if total difference count is equal to length of series */
arth===input.length-2?ans="Arithmetic":
/*checking if total division count is equal to length of series */
geo===input.length-2?ans="Geometric":
/*if neither AP nor GP*/
ans=-1}alert(ans)}
aritgeo();