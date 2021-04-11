/* 
[Isograms]
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. 
Ignore letter case.

- Example
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

// my solution
function isIsogram(str) {
  let check = [];
  const newStr = str.toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    const val = newStr[i];
    if (check.indexOf(val) !== -1) return false;
    check.push(val);
  }
  return true;
}

// notable solution
// Set Object
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

// Comparing elements within an array
function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false;
  return true;
}
