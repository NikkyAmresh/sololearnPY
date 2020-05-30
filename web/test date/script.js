var t="1545792997028";
var d=new Date(t);
console.log(d.toString())
function f(a){
  var dateTimeParts = a.split('T'),
    timeParts = dateTimeParts[1].split(':'),
    dateParts = dateTimeParts[0].split('-'),
    date;

date = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0], timeParts[1]);

console.log(date.getTime());
}