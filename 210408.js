// [printing stars]

// 1. pyramid stars

// my solution

let star = "*";
let space = " ";
let row = 4;

for (let i = 0; i < row; i++) {
  let result = "";
  for (let j = 0; j < row - i - 1; j++) {
    result += space;
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    result += star;
  }
  for (let j = 0; j < row - i - 1; j++) {
    result += space;
  }
  console.log(result);
}

// notable solution
{
  for (let star = 1; star <= 7; star += 2) {
    console.log(" ".repeat((7 - star) / 2) + "*".repeat(star));
  }
}
// ----------------------------------------------------

// 2. reverse-pyramid

// my solution

for (let i = 0; i < row; i++) {
  let result = "";
  for (let k = 0; k < i; k++) {
    result += space;
  }
  for (let j = row * 2 - 1; j >= i * 2 + 1; j--) {
    result += star;
  }
  for (let k = 0; k < i; k++) {
    result += space;
  }
  console.log(result);
}

// notable solution
{
  for (let star = 7; star >= 1; star -= 2) {
    console.log(" ".repeat((7 - star) / 2) + "*".repeat(star));
  }
}
// ----------------------------------------------------

// 3. diamond

// my solution

for (let i = 0; i < 5; i++) {
  let result = "";
  if (i < 3) {
    for (let j = 2; j > i; j--) {
      result += " ";
    }
    for (let k = 0; k < i * 2 + 1; k++) {
      result += "*";
    }
    for (let j = 2; j > i; j--) {
      result += " ";
    }
  } else {
    for (let j = 2; j < i; j++) {
      result += " ";
    }
    for (let k = 8; k > i * 2 - 1; k--) {
      result += "*";
    }
    for (let j = 2; j < i; j++) {
      result += " ";
    }
  }
  console.log(result);
}
