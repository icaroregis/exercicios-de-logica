import readline from 'readline-sync';

function shoppingList() {
  const productsList = [];
  for (let items = 0; items < 5; items++) {
    const productName = readline.question(`Digite o nome do ${items + 1} produto: `);
    const productPrice = parseFloat(readline.question(`Digite o preço do ${items + 1} produto: `)).toFixed(2);
    productsList.push({ productName, productPrice });
  }
  console.log('++ Lista de Produtos ++');
  productsList.forEach((product) => {
    console.log(
      `
       Nome do Produto: ${product.productName}
       Preço do Produto: ${product.productPrice}
      `,
    );
  });
}

shoppingList();
