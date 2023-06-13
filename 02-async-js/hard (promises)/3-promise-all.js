/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

// -------- Notes -------------//
/**
 *The promises are executed concurrently. Promise.all() takes an array of promises as input and waits for all
 *the promises in the array to resolve or reject. Once all promises have resolved, the .then() block is
 *executed. This allows for parallel execution of promises, potentially reducing the overall execution time.
 */

const { error } = require("console");

function waitOneSecond() {
  return new Promise((reslove, rejected) => {
    setTimeout(() => {
      console.log("this is 1");
      reslove();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((reslove, rejected) => {
    console.log("this is 2");
    setTimeout(() => {
      reslove();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((reslove, rejected) => {
    console.log("this is 3");
    setTimeout(() => {
      reslove();
    }, 3000);
  });
}

function calculateTime() {
  const startTime = new Date();

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then(() => {
      const endTime = new Date();
      const timeRequired = endTime - startTime;
      console.log(`Time required to fullfiled all is ${timeRequired}`);
    })
    .catch((error) => {
      console.log(`error ${error}`);
    });
}

calculateTime();

module.exports = calculateTime;
