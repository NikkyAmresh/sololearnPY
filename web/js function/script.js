// Created by People Choice

function myFunctionOne(a, b) {
    return a * b;
}

function myFunctionTwo(a, b) {
    if (a>b){
        return a * b;
    }
    else{
        return "this is not";
    }
}

document.write("myFunctionOne(5,6)="+myFunctionOne(5, 6) +"<br>myFunctionTwo(5,6)="+myFunctionTwo(5,6));