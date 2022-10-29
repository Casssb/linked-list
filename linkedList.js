class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
    this.size += 1;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let temp = this.head;
      this.head = node;
      node.next = temp;
    }
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    return temp;
  }
}
