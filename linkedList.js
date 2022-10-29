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
      while (temp.next) {
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

  at(index) {
    if (this.size === 0) {
      return 'List is empty (no nodes to seearch)';
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp ? temp : 'There is nothing at this index';
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    if (this.size < 2) {
      this.head = null;
    } else {
      let last = this.at(this.size - 2);
      last.next = null;
    }
    this.size -= 1;
  }

  contains(value) {
    let temp = this.head;
    while (temp) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  find(value) {
    if (this.size === 0) {
      return null;
    }
    let temp = this.head;
    let index = 0;
    while (temp) {
      if (temp.value === value) {
        return index;
      }
      temp = temp.next;
      index += 1;
    }
    return null;
  }

  toString() {
    if (this.size === 0) return 'List is empty';
    let string = '';
    let temp = this.head;
    while (temp) {
      string += `( ${temp.value} ) ->`;
      temp = temp.next;
    }
    return (string += null);
  }

  insertAt(value, index) {

  }
}
