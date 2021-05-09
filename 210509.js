/* 
[Vasya - Clerk]
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line.
Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

- Examples
1) tickets([25, 25, 50])  => YES 
2) tickets([25, 25, 50, 50, 100])  => NO. Vasya will not have the right bills to give 75 dollars of change 
(you can't make two bills of 25 from one of 50)
3) tickets([25, 100])  => NO. Vasya will not have enough money to give change to 100 dollars
*/

// my solution
function tickets(peopleInLine) {
  let budget = {
    25: 0,
    50: 0,
    100: 0,
  };

  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) budget[25]++;
    else if (peopleInLine[i] === 50) {
      if (budget[25] !== 0) {
        budget[25]--;
        budget[50]++;
      } else return "NO";
    } else if (peopleInLine[i] === 100) {
      if (budget[25] !== 0 && budget[50] !== 0) {
        budget[25]--;
        budget[50]--;
        budget[100]++;
      } else if (budget[25] > 2) {
        budget[25] -= 3;
        budget[100]++;
      } else return "NO";
    }
  }
  return "YES";
}

// notable solution

// this keyword, switch
function Clerk(name) {
  this.name = name;

  this.money = {
    25: 0,
    50: 0,
    100: 0,
  };

  this.sell = function (element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : (this.money[25] -= 2);
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets(peopleInLine) {
  var vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}

// array, switch
function tickets(peopleInLine) {
  var bills = [0, 0, 0];
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        bills[0]++;
        break;

      case 50:
        bills[0]--;
        bills[1]++;
        break;

      case 100:
        bills[1] ? bills[1]-- : (bills[0] -= 2);
        bills[0]--;
        break;
    }

    if (bills[0] < 0) {
      return "NO";
    }
  }
  return "YES";
}

// destructuring assignment, for..of
function tickets(peopleInLine) {
  let [c25, c50, c100] = [0, 0, 0];
  for (let v of peopleInLine) {
    if (v === 25) c25++;
    if (v === 50) {
      c50++;
      c25--;
    }
    if (v === 100) {
      c25--;
      c50 > 0 ? c50-- : (c25 -= 2);
    }
    if (c25 < 0 || c50 < 0) return "NO";
  }
  return "YES";
}
