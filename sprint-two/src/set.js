var Set = function () {
  var set = Object.create(Set.setPrototype);
  set._storage = {}; // fix me //{susan}
  return set;
};

Set.setPrototype = {};

Set.setPrototype.add = function (item) {
  //Sus : 1
  if (!this.contains(item)) {
    this._storage[item] = 1;
  }
};

Set.setPrototype.contains = function (item) {
  //susan is undefined so we go to add
  if (this._storage[item]) {
    return true;
  }
  return false;
};

Set.setPrototype.remove = function (item) {
  delete this._storage[item];
};

/*
* Complexity: What is the time complexity of the above functions?
*/
