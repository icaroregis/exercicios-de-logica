function solution(str, ending) {
  // str termina com ending?
  return str.endsWith(ending);
}

function solution2(str, ending) {
  return str.slice(-ending.length) === ending;
}

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));
console.log(solution('abc', ''));
console.log(solution2('', 'bc'));
