var Queue = function() {
  var someInstance = {};
  var sizeOfObj = 0;
  var first = 0;
  var last = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // debugger;
  // Implement the methods below

  // Add a string to the back of the queue
  someInstance.enqueue = function(value) {
    storage[last] = value;
    sizeOfObj++;
    last++;
  };

  // // Remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    if (first < last) {
      var firstItem = storage[first];
      delete storage[first];
      first++;
      sizeOfObj--;
      return firstItem;
    }
    // else if (first === last && size === 0) {
    //   var firstItem = storage[first];
    //   last = 0;
    //   return firstItem;
    // }
  };

  // // Return the number of items in the queue
  someInstance.size = function() {
    return sizeOfObj;
  };

  return someInstance;
};
