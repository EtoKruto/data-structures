var BinarySearchTree = function (value) {
  var biTree = {};
  biTree.value = value;
  biTree.left = null;
  biTree.right = null;

  _.extend(biTree, biTreeMethods);

  return biTree;
};

var biTreeMethods = {};
// A .insert() method, which accepts a value and places it in the tree in the correct position.
biTreeMethods.insert = function (value, currentTree) {
  var currentTree = currentTree || this;

  if (value < currentTree.value) { //if value is smaller than current value
    if (!currentTree.left) {
      currentTree.left = BinarySearchTree(value); //place left
    } else {
      currentTree.insert(value, currentTree.left);
    }
  } else { //if value is larger than current value
    if (!currentTree.right) {
      currentTree.right = BinarySearchTree(value); //place right
    } else {
      currentTree.insert(value, currentTree.right);
    }
  }

};

// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
biTreeMethods.contains = function (target, currentTree) {
  var currentTree = currentTree || this;

  if (target < currentTree.value) { //if value is smaller than current value
    if (!currentTree.left) {
      return false; //place left
    } else {
      if (currentTree.left.value === target) {
        return true;
      } else {
        return currentTree.contains(target, currentTree.left);
      }
    }
  } else { //if value is larger than current value
    if (!currentTree.right) {
      return false; //place right
    } else {
      if (currentTree.right.value === target) {
        return true;
      } else {
        return currentTree.contains(target, currentTree.right);
      }
    }
  }

};

// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
biTreeMethods.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};







/*
* Complexity: What is the time complexity of the above functions?
*/
