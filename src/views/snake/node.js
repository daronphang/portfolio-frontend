const LinkedListNode = class LinkedListNode {
  // reversed linked list i.e. head is the last element,
  // tail is the first element
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.score = 0;
    this.state = null;
    this.next = null;
    this.direction = null;
  }

  setNext(next) {
    this.next = next;
    this.score = 0;
    this.direction = null;
  }

  setAsHead(state, score, direction) {
    this.state = state;
    this.score = score;
    this.direction = direction;
  }

  reset() {
    this.next = null;
    this.state = null;
    this.score = 0;
  }
};

const DoublyLinkedListNode = class DoublyLinkedListNode {
  constructor(id, val) {
    this.id = id;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
};

export { LinkedListNode, DoublyLinkedListNode };
