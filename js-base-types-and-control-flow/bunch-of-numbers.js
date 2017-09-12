let number = 100;

// while (number + 1) { // this will because the loop will stop once the expression
// `number + 1` is 0. Remember that JavaScript coerces 0 to false
while (number >= 0) {
  console.log(number);
  number -= 1;
  // 👆 syntax sugar for 👇
  // number  = number - 1;

  // --number; // decrements value of number and returns the decremented value
  // number--; // decrements value of number and returns the value before being decremented
}
