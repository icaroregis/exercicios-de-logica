let s = '  ##START##_JavaScript_é_incrível.   ';
const result = s
  .trim()
  .replace('##START##_', '')
  .substring(0, 10)
  .replace('_', ' ')
  .slice(0, 7)
  .toUpperCase()
  .repeat(2)
  .substring(5, 12);

console.log(result); // Output: "SCRIPT"
