var ltr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function gr(a) {
  return Math.floor(Math.random() * 9);
}
document.write("<table>");
for (var j = 0; j < 18; j++) {
  var num = gr(12);
  var ln = 14 - num;
  document.write("<tr>");
  for (var i = 0; i < num; i++) {
    wt(ltr[Math.floor(Math.random() * ltr.length)]);
  }
  wt(ltr[18]);wt(ltr[8]); wt(ltr[13]);wt(ltr[6]);wt(ltr[11]);wt(ltr[4]);
  for (var i = 0; i < ln; i++) {
    wt(ltr[Math.floor(Math.random() * ltr.length)]);
  }
  document.write("</tr>");
}
document.write("</table>");
function wt(a) {
  document.write("<td>" + a + "</td>");
}