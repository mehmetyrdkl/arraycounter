"use strict";

let counter;

window.onload = () => {
  counter = [0];
  console.log(counter);
  arrayLoop();
};

function arrayLoop() {
  counter.unshift(counter[0] + 1);
  if (counter.length >= 9) {
    counter.pop();
  }
  console.log(counter);
  setTimeout(arrayLoop, 1000);
}
