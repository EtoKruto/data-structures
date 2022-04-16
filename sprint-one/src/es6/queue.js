class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.sizeOfObj = 0;
    this.storage = {};
    this.first = 0;
    this.last = 0;

  }
  enqueue (value) {
    this.storage[this.last] = value;
    this.sizeOfObj++;
    this.last++;
  }

  dequeue () {
    if (this.first < this.last) {
      var firstItem = this.storage[this.first];
      this.sizeOfObj--;
      this.first++;
      return firstItem;
    }
  }

  size () {
    return this.sizeOfObj;
  }
}