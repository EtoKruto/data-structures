var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.sizeOfObj = 0;
  someInstance.first = 0;
  someInstance.last = 0;

  return someInstance;
};


var queueMethods = {};
// Add a string to the back of the queue

queueMethods.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
  this.sizeOfObj++;
},
// Remove and return the string at the front of the queue
queueMethods.dequeue = function(value) {
  if (this.first < this.last) {
    var firstItem = this.storage[this.first];
    this.first++;
    this.sizeOfObj--;
    return firstItem;
  }

},

// Return the number of items in the queue
queueMethods.size = function(value) {
  return this.sizeOfObj;

}
