var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(Queue.prototype);
  someInstance.storage = {};
  someInstance.sizeOfObj = 0;
  someInstance.first = 0;
  someInstance.last = 0;

  // _.extend(someInstance, queueMethods);

  return someInstance;
};
// Add a string to the back of the queue
Queue.prototype.enqueue = function(value) {


};

// Remove and return the string at the front of the queue
Queue.prototype.dequeue = function(value) {


};

// Return the number of items in the queue
Queue.prototype.dequeue = function(value) {


};
size: function() {

}


};


