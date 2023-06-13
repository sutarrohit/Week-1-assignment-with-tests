/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, rejected) => {
    if (typeof n === "string") {
      rejected(`This is string ${n}, Please enter number`);
    }

    setTimeout(() => {
      resolve(n);
    }, n * 1000);
  });
}

wait(2)
  .then((data) => {
    console.log(`Promise resolved successfully after ${data} seconds`);
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });

module.exports = wait;
