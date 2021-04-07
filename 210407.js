/* 
[The highest profit wins!]

Write a function that returns both the minimum and maximum number of the given list/array.

-Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. 
Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

- Example
minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]
*/

// my solution
// Math.max(), Math.min() method
function minMax(arr) {
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);

  return [min, max];
}

// notable solution
// spread syntax
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Refac Code
const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];
