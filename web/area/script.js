// Created by neicore
function areaT(a, b, c){
    a = parseFloat(document.forms.sideA.value);
    b = parseFloat(document.forms.sideB.value);
    c = parseFloat(document.forms.sideC.value);
    var s = (a + b + c)/2;
    var area = Math.sqrt(s*((s-a)*(s - b)*(s - c)));
    var done = document.getElementById("done");
    if(isNaN(area)){
        done.innerHTML="Invalid Sides";
    }
    else{
        done.innerHTML = area ;
    }
}
