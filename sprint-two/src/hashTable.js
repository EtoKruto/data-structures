

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //insert('Steven', 'Seagal');
  // k == Steven
  //index = 8
  //v = Seagal

  _storage[value] = value;
  this._storage[index] = _storage[v];


};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //retrieve('Steven')).to.equal('Seagal');
  return this._storage[index];



};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
* Complexity: What is the time complexity of the above functions?
*/


