/*
[Vowel Count]
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

// my solution
function getCount(str) {
  let vowelsCount = 0;
  let vowels = new Array("a", "e", "i", "o", "u");
  let arr = str.split("");

  // enter your majic here
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

// notable solution
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
