let jewelryInventory = new Set(); // Jewelry store inventory as a Set
jewelryInventory.add('Diamond Ring'); // Adding Diamond Ring
jewelryInventory.add('Gold Necklace'); // Adding Gold Necklace
jewelryInventory.add('Diamond Ring'); // Attempt to add Diamond Ring again

console.log(jewelryInventory.has('Gold Necklace')); // Should print 2, as duplicate won't be added
