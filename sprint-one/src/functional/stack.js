var Stack = function() {
  var someInstance = {};
  var storage = {};
  var sizeOfObj = 0;


  // Use an object with numeric keys to store values
  var storage = {};


  someInstance.push = function(value) {
    storage[sizeOfObj] = value;
    sizeOfObj++;
    return sizeOfObj;
  };

  someInstance.pop = function() {
    if (sizeOfObj > 0) {
      var popedItem = storage[sizeOfObj - 1];
      sizeOfObj--;
      return popedItem;
    }
  };

  someInstance.size = function() {
    return sizeOfObj;
  };

  return someInstance;
};