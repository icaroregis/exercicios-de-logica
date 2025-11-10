class Tree {
  nameFruit(name = 'apple') {
    console.log(name);
  }
}

let appleTree = new Tree();
appleTree.nameFruit(); // Call the class method. Should output the name of the fruit
