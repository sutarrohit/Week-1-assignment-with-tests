/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

// -------- Notes -------------//
/**
 *The promises are executed sequentially. Each .then() block is chained to the previous promise,
 *ensuring that the next promise is only executed once the previous one has resolved. This results in a sequential execution order.
 */

function waitOneSecond() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((reslove, rejects) => {
    setTimeout(() => {
      reslove();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((reslove, rejected) => {
    setTimeout(() => {
      reslove();
    }, 3000);
  });
}

function calculateTime() {
  const startTime = new Date();

  waitOneSecond()
    .then(() => {
      return waitTwoSecond();
    })
    .then(() => {
      return waitThreeSecond();
    })
    .then(() => {
      const endTime = new Date();
      const timeRequired = endTime - startTime;

      console.log(`Time required to fullfiled all promises is ${timeRequired}`);
    })
    .catch((error) => {
      console.error("error:", error);
    });
}

calculateTime();

module.exports = calculateTime;
