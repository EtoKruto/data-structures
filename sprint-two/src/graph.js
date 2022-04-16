
// Instantiate a new graph
var Graph = function () {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.storage[node] = {};
  //{5:{},2:{}, 1:{}}
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  if (this.storage[node]) { //if{5:{},2:{}, 1:{}} === true
    return true;
  }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  delete this.storage[node]; //this dellete {5:{} deletes everything (key:value pair)}
};

Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (this.storage[fromNode] && this.storage[toNode]) { //if storage does not have the key there is no edge
    if (this.storage[toNode][fromNode]) {
      return true;
    }
  }
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) { //(5,4)
  if (this.storage[fromNode] && this.storage[toNode]) {
    this.storage[fromNode][toNode] = true;
    this.storage[toNode][fromNode] = true; //{5 {4: true}}
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) { // deleting {5:{} <=deleting value object of node
  if (this.storage[fromNode] && this.storage[toNode]) {
    delete this.storage[fromNode][toNode];
    delete this.storage[toNode][fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {

  for (var keys in this.storage) { // keys are the node and running callback through that function
    // we dont see cb, but we want to run the key thru fn of cb
    cb(keys);
  }

};

// storage = {
//   4:
//   {
//     5: true
//   },
//   5:
//   {
//     4: true
//   }
// };




// // Instantiate a new graph
// var Graph = function () {

//   this.storage = {};


// };

// // Add a node to the graph, passing in the node's value.
// Graph.prototype.addNode = function (node) {
//   var gNode = {};
//   gNode.value = node;
//   gNode.edge = [];

//   this.storage[node] = gNode;
//   /*  1, 2
//   storage = {
//     1: 1,
//     2: 2
//   }

//   storage = {
//     1: {
//       value: 1,
//       edge: [2]
//     },
//     2: {
//       value: 2,
//       edge: [1]
//     }
//   }
//   node.hasEdge(1, 2)
//   storage[1].edge.includes(2)

//   */
// };

// // Return a boolean value indicating if the value passed to contains is represented in the graph.
// Graph.prototype.contains = function (node) {
//   if (this.storage[node] === undefined) {
//     return false;
//   } else if (this.storage[node].value === node) {
//     return true;
//   }
//   return false;


// };

// // Removes a node from the graph.
// Graph.prototype.removeNode = function (node) {
//   delete this.storage[node];

// };

// // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Graph.prototype.hasEdge = function (fromNode, toNode) {

//   if (this.storage[fromNode] && this.storage[toNode]) {
//     console.log(this.storage[fromNode].edge);

//     if (this.storage[fromNode].edge.includes(toNode)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   return false;
// };

// // Connects two nodes in a graph by adding an edge between them.
// Graph.prototype.addEdge = function (fromNode, toNode) {

//   if (this.storage[fromNode] && this.storage[toNode]) {
//     this.storage[fromNode].edge.push(toNode);
//     this.storage[toNode].edge.push(fromNode);
//   }

// };

// // Remove an edge between any two specified (by value) nodes.
// Graph.prototype.removeEdge = function (fromNode, toNode) {
//   if (this.storage[fromNode] && this.storage[toNode]) {


//     this.storage[fromNode].edge[toNode];
//     this.storage[toNode].edge[fromNode];
//   }
// };

// // Pass in a callback which will be executed on each node of the graph.
// Graph.prototype.forEachNode = function (cb) {


// };

/*
* Complexity: What is the time complexity of the above functions?
*/

/*
// storage = {
//   1: {
//     value: 1,
//     edge: [2]
//   },
//   2: {
//     value: 2,
//     edge: [1]
//   }
// }

var f = (num) => {
  num += 1;
}

g.forEachNode(f) {

}

*/

