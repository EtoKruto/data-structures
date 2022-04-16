var Tree = function (value) {
  var newTree = {};

  // .children property, an array containing a number of subtrees
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};
// .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function (value) {
  this.children.push(Tree(value));//Tree is its own node, so we're using tree as it's storage

};


// A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function (target) {

  if (this.value === target) {
    return true;
  }

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};







/*
* Complexity: What is the time complexity of the above functions?
*/



// contains: function (target) {
//   var found = false;

//   var innerFunction = function (node, found) {
//     if (this.value === target) {
//       return true;
//     }
//     if (this.children.length > 0) {
//       for (var i = 0; i < this.children.length; i++) {

//         found = innerFunction(this.children[i]);

//         // if (this.children[i].value === target) {
//         //   return true;
//         // }
//       }
//     }
//   };

//   innerFunction(node, found);
//   return found;
// }
// };