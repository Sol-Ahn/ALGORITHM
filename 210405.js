/*
[Count characters in your string]

The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

// my solution
function count(string) {
  return string.split("").reduce((acc, str) => {
    acc[str] ? acc[str]++ : (acc[str] = 1);
    return acc;
  }, {});
}

// notable solution
function count(string) {
  return string.split("").reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}
