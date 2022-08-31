"use strict";

let i = 1;

const countingArray = [0];

arrayLoop();

function arrayLoop() {
  console.log(countingArray);
  if (countingArray.length < 9) {
    countingArray.unshift(i);
  } else {
    countingArray.unshift(i);
    countingArray.pop(-1);
  }
  if (i < Infinity) {
    setTimeout(function () {
      i++;
      arrayLoop();
    }, 1000);
  }
}
