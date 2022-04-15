var LinkedList = function () {
  var list = {};
  // .head property, a linkedListNode instance
  list.head = null;
  // .tail property, a linkedListNode instance
  list.tail = null;

  // .addToTail() method, takes a value and adds it to the end of the list
  list.addToTail = function (value) {
    //don't have a tail
    if (!this.tail) {
      this.tail = Node(value);
      this.head = Node(value);

    } else {
      //have a tail
      this.tail.next = Node(value); //head or tails
      this.tail = Node(value);
      this.head.next = this.tail;
    }

  };

  // .removeHead() method, removes the first node from the list and returns its value
  list.removeHead = function () {
    //this.head.next = Node(value);
    // this.head = this.head.next;
    if (this.head) {
      var headValue = this.head.value;
      // if (this.head.next) {
      this.head = this.head.next;
      return headValue;
      // } else {
      //   this.head = null;
      //   this.tail = null;
      //   return headValue;
      // }
    }
    //return undefined; //maybe not null but undefined if there is nothing to remove and we have to return something like how we returned something in Pop
  };

  // .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
  list.contains = function (target) {
    var temp = this.head;

    while (temp !== this.tail) {

      if (temp.value === target) {
        return true;
      }
      if (temp.next) {
        temp = temp.next;
      }
    }

    if (temp.value === target) {
      return true;
    } else {
      return false;

    }
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};

/*
* Complexity: What is the time complexity of the above functions?
*/
