const receiptMessage = (flour, sugar, eggQuantity) => {
  return `Mix ${flour} ${flour >= 2 ? 'cups' : 'cup'} of flour, ${sugar} cup of sugar, and ${eggQuantity} ${
    eggQuantity >= 2 ? 'eggs' : 'egg'
  } to bake a cake.`;
};

console.log(receiptMessage(2, 1, 3));
