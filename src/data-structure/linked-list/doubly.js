class DoublyLinkedList {
  constructor() {
    this._head = null
    this._tail = null
    this._length = 0
  }

  get length() {
    return this._length
  }

  get head() {
    return this._head
  }

  set head(val) {
    this._head = val
  }

  set tail(val) {
    this._tail = val
  }

  addToHead(val) {
    const newNode = new Node(val)
    
    // list is empty
    if(this.isListEmpty()) {
      this._head = this._tail = newNode
      this._length++
      return
    }
    
    // list contains element(s) 
    newNode.next = this._head
    this._head.prev = newNode
    this._head = newNode
    this._length++
  }

  addToTail(val) {    
    if(this.isListEmpty()) {
      this.addToHead(val)
      return
    } 
    
    // list contains more than one element
    const newNode = new Node(val)
    newNode.prev = this._tail
    this._tail.next = newNode
    this._tail = newNode
    this._length++
  }

  rmFromHead() {
    if(this.isListEmpty()) {
      this._length--
      return null
    }
    if(this.isOneElementInList()) {
      const rmEl = this._head
      this._length--
      rmEl.next = rmEl.prev = this._head = this._tail = null
      return rmEl
    }

    const rmEl = this._head
    this._head = this.head.next
    rmEl.next = rmEl.prev = null
    this._length--
    return rmEl
  }

  rmFromTail() {
    if(this.isListEmpty() || this.isOneElementInList()) {
      return this.rmFromHead()
    }

    const rmEl = this._tail
    this._tail = this._tail.prev
    this._tail.next = null
    rmEl.next = rmEl.prev = null

    this._length--
    return rmEl
  }

  traversal(cb) {
    // copy the head obj reference
    let currNode = this._head

    // loop through while current node is available (not null)
    let index = 0
    while(currNode) {
      // console.log("currentNode: %O", currNode)

      cb(currNode, index)
      currNode = currNode.next
      index++
    }
  }

  isListEmpty() {
    return !this._head && !this._tail
  }
  
  isOneElementInList() {
    return !this.isListEmpty() && this._head === this._tail
  }
}

class Node {
  constructor(val) {
    this._val = val
    this._next = null
    this._prev = null
  }

  get val() {
    return this._val
  }

  set next(val) {
    this._next = val
  }

  get next() {
    return this._next
  }

  set prev(val) {
    this._prev = val
  }

  get prev() {
    return this._prev
  }
}

module.exports.DoublyLinkedList = DoublyLinkedList
