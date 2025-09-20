function reverseWords(str) {
  return str
    .split(' ')
    .map((string) => [...string].reverse().join(''))
    .join(' ');
}

console.log(reverseWords('Olá mundo'));
