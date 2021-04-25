/* 
[Title Case]
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) 
or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. 
Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

- Arguments
First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. 
The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
*/

// my solution
function titleCase(title, minorWords) {
  if (title !== "") {
    if (minorWords !== undefined) {
      var minorWords = minorWords.toLowerCase().split(" ");
    } else {
      var minorWords = [];
    }

    return title
      .toLowerCase()
      .split(" ")
      .map((word, i) => {
        if ((word !== "" && !minorWords.includes(word)) || i === 0) {
          word = word.split("");
          word[0] = word[0].toUpperCase();
          word = word.join("");
        }
        return word;
      })
      .join(" ");
  }
  return title;
}

// notable solution
// Refact
function titleCase(title, minorWords) {
  var minorWords =
    typeof minorWords !== "undefined"
      ? minorWords.toLowerCase().split(" ")
      : [];
  return title
    .toLowerCase()
    .split(" ")
    .map((word, i) => {
      if (word != "" && (minorWords.indexOf(word) === -1 || i == 0)) {
        word = word.split("");
        word[0] = word[0].toUpperCase();
        word = word.join("");
      }
      return word;
    })
    .join(" ");
}

// String.prototype
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

function titleCase(title, minorWords) {
  var titleArr = title.toLowerCase().split(" "),
    minorWordsArr = minorWords ? minorWords.toLowerCase().split(" ") : [];

  return titleArr
    .map(function (word, i) {
      return minorWordsArr.indexOf(word) === -1 || i === 0
        ? word.capitalize()
        : word;
    })
    .join(" ");
}
