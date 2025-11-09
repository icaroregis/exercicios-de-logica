function calculateTotal(price, tax = 10) {
  const totalTax = (price * tax) / 100;
  const finalPrice = totalTax + price;
  return finalPrice.toFixed(2);
}

function welcomeMessage(price, tax) {
  return `I hope you enjoyed it. Here is your bill with the total amount: $ ${calculateTotal(price, tax)}`;
}

console.log(welcomeMessage(150.9, 20));
