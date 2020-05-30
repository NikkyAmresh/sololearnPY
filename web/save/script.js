// Created by Richard Myatt

/*            Author: Richard Myatt
              Date: 1 November 2018

              A solo run using anime.js
*/

window.onload = function() {

var letterTimeline = anime.timeline({
  autoplay: true,

  loop: false
});

letterTimeline
.add({
  targets: ".letter",
  translateY: {
    value: [-800, 0],
    duration: 800,
    delay: function(el, i) {
      return i * 700;
    },
    elasticity: 600
  }
})
.add({
  targets: ".letter",
  translateX: 1600,
  delay: function(el, i) {
    return Math.abs(i - 8) * 600;
  },
  elasticity: 50
})
.add({
  targets: ".letter",
  translateX: function(el, i) {
    return -1600;
  },
  duration: 5
})
.add({
  targets: ".letter",
  translateX: 0,
  delay: function(el, i) {
    return Math.abs(i - 8) * 400;
  },
  easing: "linear",
  elasticity: 0
});

};
