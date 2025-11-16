function factorial(n) {
  if (n === 1) {
    console.log(n);
    return n;
  } else {
    console.log(n);
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // Should print 120
