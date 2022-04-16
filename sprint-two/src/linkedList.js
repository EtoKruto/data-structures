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
      this.tail = Node(value); //tail = {value:4, next: null}
      this.head = this.tail; //head = {value:4, next: null}

    } else {
      //have a tail
      this.head.next = Node(value); //head = {value: 4, next:{value:5, next: null}} // Node = {value:5, next: null}
      this.tail = this.head.next;//tail ={value:5, next: null}

    }

  };

  // .removeHead() method, removes the first node from the list and returns its value
  list.removeHead = function () {
    if (this.head) { // head = {value: 4, next:{value:5, next: null}}
      var headValue = this.head.value; //head = 4
      this.head = this.head.next; // head = {value:5, next: null}
      return headValue;
    }
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
