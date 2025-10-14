function createFrame(names) {
  let maxLen = Math.max(...names.map((item) => item.length));
  let linha = names.map((item) => {
    return `* ${item}${' '.repeat(maxLen - item.length)} *`;
  });
  let borda = '*'.repeat(maxLen + 4);
  return `${borda}\n${linha.join('\n')}\n${borda}`;
}

createFrame(['a', 'bb', 'ccc']);
