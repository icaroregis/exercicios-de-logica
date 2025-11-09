function bakeCookies(batchName, quantity) {
  const bakingMessage = `Baking ${quantity} cookies for ${batchName} batch.`;
  return bakingMessage;
}

console.log(bakeCookies('Space Bakery', 10));
