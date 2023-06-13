/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // conver string to lowecase and remove whitspace
  str1 = str1.toLowerCase().replace(/\s/g, "");
  str2 = str2.toLowerCase().replace(/\s/g, "");

  const sortedString1 = str1.split("").sort().join("");
  const sortedString2 = str2.split("").sort().join("");

  if (sortedString1 === sortedString2) {
    return true;
  } else {
    return false;
  }
}

const result = isAnagram("spar", "rasp");
console.log(result);

module.exports = isAnagram;
