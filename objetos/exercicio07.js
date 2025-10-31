let cosmicSet = new Set(['Star', 'Planet', 'Comet', 'Asteroid']);
cosmicSet.add('Star');
console.log(cosmicSet); // What happens when we try to add another 'Star'?

cosmicSet.delete('Comet');
console.log(cosmicSet.has('Comet')); // Is the 'Comet' still there?
