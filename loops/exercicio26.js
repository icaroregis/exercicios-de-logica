for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log('Skipping 5');
    continue;
  }
  console.log(i);
  if (i === 8) {
    console.log('Mission aborted!');
    break;
  }
}
