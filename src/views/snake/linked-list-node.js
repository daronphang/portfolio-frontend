export class LinkedListNode {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.score = 0;
    this.state = null;
    this.next = null;
  }

  setNext(next) {
    this.next = next;
    this.score = 0;
  }

  setAsHead(state, score) {
    this.state = state;
    this.score = score;
  }

  reset() {
    this.next = null;
    this.state = null;
    this.score = 0;
  }
}
