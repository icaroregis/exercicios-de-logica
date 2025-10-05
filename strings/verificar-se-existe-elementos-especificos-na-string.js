function XO(string) {
  const formatedString = string.toLowerCase();
  const countX = formatedString.split('').filter((l) => l === 'x').length;
  const countO = formatedString.split('').filter((l) => l === 'o').length;

  return countX === countO;
}

console.log(XO('xXBb'));
