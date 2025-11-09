function calculateOrderTotal(mainDishPrice = 10, drinkPrice = 2) {
  return mainDishPrice + drinkPrice;
}

let orderTotal = calculateOrderTotal(12);
console.log('The total for your order is: $' + orderTotal);
