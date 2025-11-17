function factorial(n) {
  if (n === 1) {
    // base case
    return 1;
  } else {
    return n * factorial(n - 1); // recursive case
  }
}
console.log(factorial(3));
