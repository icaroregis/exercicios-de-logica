function calcTotalValue(days = 0) {
  if (days < 0) return 0;
  if (days === 0) return 0;
  if (days === 1) return 40;
  if (days === 2) return 80;
  if (days >= 7) {
    return 40 * days - 50;
  }
  if (days >= 3) {
    return 40 * days - 20;
  }
}

console.log(calcTotalValue(118));
