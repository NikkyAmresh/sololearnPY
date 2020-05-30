// Created by bobbie

//this code is adapted from a quiz code i found online months ago and lost if anyone finds original please let me know happy to add credit here

var nQ = 10;
var nC = 4;
var a = new Array(10);

a[0] = "6";
a[1] = "Erie";
a[2] = "8";
a[3] = "G";
a[4] = "Monday";
a[5] = "9";
a[6] = "bloat";
a[7] = "3564278";
a[8] = "4";
a[9] = "Bird";

function getScore(form) {
  var score = 0;
  var cE;
  var cS;
  for (i=0; i<nQ; i++) {
    cE = i*nC;
  for (j=0; j<nC; j++) {
      cS = form.elements[cE + j];
   if (cS.checked) {
   if (cS.value == a[i]) {
          score++;
     break;
        }
      }
    }
  }
  score = Math.round(score/nQ*200);
  form.percentage.value = score + " IQ";
  var correctA = "";
  for (i=1; i<=nQ; i++) {
    correctA += i + ". " + a[i-1] + "\r\n";
  }}
  