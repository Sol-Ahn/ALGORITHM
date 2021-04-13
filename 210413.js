/* 
[Regex validate PIN code]
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
- Example
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// my solution
// Regular Expression
function validatePIN(pin) {
  var RegExp = /^[0-9]{4,6}$/g;
  if (pin.length === 4 || pin.length === 6) {
    var result = RegExp.test(pin);
    return result;
  }
  return false;
}

// notable solution
// RexExp Refactor
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
