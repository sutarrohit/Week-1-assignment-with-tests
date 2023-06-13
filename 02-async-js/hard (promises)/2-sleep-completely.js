/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const milliseconds = seconds * 1000;
  const startData = new Date();

  while (new Date() - startData < milliseconds) {
    // console.log(new Date() - startData);
  }
  return milliseconds;
}

const result = sleep(2);
console.log(`Thread block for ${result} milliseconds`);

module.exports = sleep;
