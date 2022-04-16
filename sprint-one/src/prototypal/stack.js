var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.sizeOfObj = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.sizeOfObj] = value;
    this.sizeOfObj++;
    return this.sizeOfObj;
  },

  pop: function () {
    if (this.sizeOfObj > 0) {
      var popedItem = this.storage[this.sizeOfObj - 1];
      this.sizeOfObj--;
      return popedItem;
    }

  },
  size: function () {
    return this.sizeOfObj;
  }

};