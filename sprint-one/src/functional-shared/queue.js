var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.sizeOfObj = 0;
  someInstance.first = 0;
  someInstance.last = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;
};

// debugger;
queueMethods = {
  // Add a string to the back of the queue
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.sizeOfObj++;
    this.last++;
  },

  // // Remove and return the string at the front of the queue
  dequeue: function() {
    if (this.first < this.last) {
      var firstItem = this.storage[this.first];
      this.first++;
      this.sizeOfObj--;
      return firstItem;
    }
  },

  // // Return the number of items in the queue
  size: function() {
    return this.sizeOfObj;
  }
};