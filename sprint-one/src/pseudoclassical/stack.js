var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.someInstance = {};
  this.storage = {};
  this.sizeOfObj = 0;
};


Stack.prototype.push = function (value) {
  this.storage[this.sizeOfObj] = value;
  this.sizeOfObj++;
  return this.sizeOfObj;
};

Stack.prototype.pop = function () {
  if (this.sizeOfObj > 0) {
    var popedItem = this.storage[this.sizeOfObj - 1];
    this.sizeOfObj--;
    return popedItem;
  }
};

Stack.prototype.size = function () {
  return this.sizeOfObj;
};