window.onload=function(){

window.$ = function(obj){
    var elem = obj;
    try{
        obj = document.querySelectorAll(obj)[0];
    }
    catch(e){
        // Object is a Function
        var func = arguments[0];
        try{
            func();
        }
        catch(err){}
    }
    try {
    obj.eq = function(index){
        obj = document.querySelectorAll(elem)[index];
        return obj;
    }
    obj.html = function(text){
        if(text == null || text == undefined){
            return obj.innerHTML
        }
        else{
            obj.innerHTML = text;
        }
    }
    obj.css = function(styles){
    if(typeof(styles) == "object"){
        var names = [];
        for(i in styles){
            names.push(i);
        }
        for(var c = 0; c < names.length; ++c){
            obj.style[names[c]] = styles[names[c]];
        }
    }
    else{
        obj.style[styles] = arguments[1];
    }
    }
    obj.text = function(text){
    if(text == null || text == undefined){
        return obj.innerText;
        }
    else{
        obj.innerText = text;
    }
    }
    obj.append = function(content){
        obj.innerHTML += content;
    }
    obj.prepend = function(content){
        obj.innerHTML = content + obj.innerHTML;
    }
    obj.remove = function(){
        var parent = obj.parentElement;
        parent.removeChild(obj);
    }
    obj.parent = function(){
        return obj.parentElement;
    }
    obj.next = function(){
        return obj.nextSibling;
    }
    obj.prev = function(){
        return obj.previousSibling;
    }
    obj.children = function(){
        return obj.childNodes;
    }
    obj.attr = function(attributes){
        if(typeof(attributes) == "object"){
        var names = [];
        for(i in attributes){
            names.push(i);
        }
        for(var c = 0; c < names.length; ++c){
            obj.setAttribute(names[c], attributes[names[c]]);
        }
    }
    else{
    if(arguments.length == 2){
        obj.setAttribute(attributes, arguments[1])
    }
    else{
        return obj.getAttribute(attributes);
    }
    }
    }
    obj.trigger = function(event){
        var evt= new Event(event, {
        "bubbles":true, 
        "cancelable":false
        });
        obj.dispatchEvent(evt);
    }
    obj.val = function(inputValue){
        if(inputValue == null || inputValue == undefined){
            return obj.value;
        }
        else{
            obj.value = inputValue;
        }
    }
    obj.removeAttr = function(attribute){
        obj.setAttribute(attribute, null);
    }
    obj.empty = function(){
        obj.innerHTML = "";
    }
    obj.hide = function(){
        obj.style.visibility = "hidden";
        obj.style.pointerEvents = "none";
    }
    obj.show = function(){
        obj.style.visibility = "visible";
        obj.style.pointerEvents = "auto";
    }
    obj.on = function(event, callback, bubbles){
        obj.addEventListener(event, callback, ((bubbles) ? true : false));
    }
    obj.off = function(event, callback){
        obj.removeEventListener(event, (callback) ? callback : '');
    }
    obj.prop = function(name, value){
        if(!value){
            return obj[name];
        }
        else{
            obj[name] = value;
        }
    }
    obj.animate = function(attributes, timingFunc, callback){
        timingFunc = ((timingFunc) ? timingFunc : 1000);
        callback = ((callback) ? callback.toString() : false);
        var trans = [];
        var oldTransitions = obj.style.transition;
        for(items in attributes){
            trans.push(items + " " + timingFunc + "ms linear");
        }
        obj.style.transition = trans.toString();
        for(i in attributes){
            obj.style[i] = attributes[i];
        }
        if(callback){
            var exec = new Function(callback);
            exec();
        }
        setTimeout(function(){
            obj.style.transition = oldTransitions;
        }, timingFunc);
    }
    obj.fadeIn = function(time){
        if(time < 1){
            obj.style.opacity = "1";
        }
        else{
            var oldTransitions = obj.style.transition;
            obj.style.transition = "opacity " + time + "ms linear";
            obj.style.opacity = "1";
            obj.style.pointerEvents = "auto";
            setTimeout(function(){
                obj.style.transition = oldTransitions;
            }, time);
        }
    }
    obj.fadeOut = function(time){
        if(time < 1){
            obj.style.opacity = "0";
        }
        else{
            var oldTransitions = obj.style.transition;
            obj.style.transition = "opacity " + time + "ms linear";
            obj.style.opacity = "0";
            obj.style.pointerEvents = "none";
            setTimeout(function(){
                obj.style.transition = oldTransitions;
            }, time);
        }
    }
    $.now = function(){
        return Date.now();
    }
    $.fn = $.prototype;
    }
    catch(all){
        return false;
    }
    return obj;
}



$("#paragraph").html("Hello World");
$("#paragraph").css({
    "color" : "#F00",
    "background" : "#EEE"
});
$("#test").fadeOut(0)
$("#test").text("<p>Test</p>");
$("#test").css("color", "#00F");
$("#test").prepend("<b>Test:</b> ");
$("#test").fadeIn(1000);
$("#clickme").on("click", function(){
    alert("Clicked!");
});
$("#special").on("touchmove", function(e){
    e.preventDefault();
    e = e.changedTouches[0]
    var x = e.clientX;
    var y = e.clientY;
    $("#special").text("X: " + x + "px Y: " + y);
});
$("#test").attr("class", "testers");
$("p").eq(1).css("background", "#000");
$(function(){
    alert("This alert is executed using jQuery Functions!")
});
$("#clickme").hide();
$("#clickme").show();
$("#floating").animate({
    "left" : "0",
    "top" : "0"
}, 1000);
$("#includes").text("Jquery methods added:\n\nappend()\nhtml()\ntext()\nprepend()\nremove()\ncss()\nattr()\ntrigger()\nval()\nremoveAttr()\neq()\nnow()\nempty()\non()\noff()\nprop()\nparent()\nnext()\nprev()\nchildren()\nhide()\nshow()\nanimate()\nfadeIn()\nfadeOut()");

}