/*
[Array.diff]
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

// my solution
function arrayDiff(a, b) {
  const result = a.filter((el) => !b.includes(el));
  return result;
}

// notable solution
// 1. 변수선언 없이 바로 반환
function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}

// 2. Set 객체 활용
function array_diff(a, b) {
  b = new Set(b);
  return a.filter((v) => !b.has(v));
}
