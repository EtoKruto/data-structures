class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.someInstance = {};
    this.storage = {};
    this.sizeOfObj = 0;
  }

  push (value) {
    this.storage[this.sizeOfObj] = value;
    this.sizeOfObj++;
    return this.sizeOfObj;
  }
  pop () {
    if (this.sizeOfObj > 0) {
      var popedItem = this.storage[this.sizeOfObj - 1];
      this.sizeOfObj--;
      return popedItem;
    }

  }

  size () {
    return this.sizeOfObj;
  }

}
