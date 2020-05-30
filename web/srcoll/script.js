// Created by visph

/*
    How to create up and down arrow to scroll in site?

    Arrow Scrolling

    https://www.sololearn.com/Discuss/516286/?ref=app
*/

// global customizable constant
var scroll_step = 10;

// global variables
var scroll_target, viewport_id;

window.onload = function() {
    // initialization of global variables
    scroll_target = document.body || document.documentElement;
    viewport_id = document.getElementById('viewport');
    // activate <nav> 'display' (take first one in document)
    document.getElementsByTagName('nav')[0].style.display = 'unset';
};

function scroll(amount) { scroll_target.scrollTop += amount; }

function scroll_top() { scroll_target.scrollTop = 0; }

function scroll_bottom() {
/*
    // lazy way, could produce some lag for big heigh pages
    var a = scroll_target.scrollTop++;
    while (a!=scroll_target.scrollTop) a = scroll_target.scrollTop++;
*/
    // clever way
    var s =  window.getComputedStyle(scroll_target);
    scroll_target.scrollTop = parseInt(s.height);
}

function page_up() {
    var s = window.getComputedStyle(viewport_id);
    scroll_target.scrollTop -= parseInt(s.height)-2*scroll_step;
    // a bit less than viewport height is more user friendly ^^
}

function page_down() {
    var s = window.getComputedStyle(viewport_id);
    scroll_target.scrollTop += parseInt(s.height)-2*scroll_step;
    // a bit less than viewport height is more user friendly ^^
}
