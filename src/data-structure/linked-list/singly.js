function SinglyLinkedList() {
  // head: Node
  this.head = null
  this.length = 0
}

SinglyLinkedList.prototype.addToHead = function(val) {
  const newNode = new Node(val, null)
  
  // list is empty
  if(!this.head) this.head = newNode
  // list contains node
  else {
    newNode.next = this.head
    this.head = newNode
  }
  this.length++
}

// remove head element from list and return it
SinglyLinkedList.prototype.removeFromHead = function() {
  // list is empty
  if(!this.head) return null
  // list contain one element
  if(!this.head.next) {
    const rmEl = this.head
    this.head = null
    this.length--
    return rmEl
  } 
  // list contains more than on element
  const rmEl = this.head
  this.head = this.head.next
  rmEl.next = null
  this.length--
  return rmEl
}

// traverse through list and provide callback for current node
SinglyLinkedList.prototype.traversal = function(cb) {
  // copy the head obj reference
  let currNode = {...this.head}

  // loop through while current node is available (not null)
  let index = 0
  while(currNode) {
    cb(currNode, index)
    currNode = currNode.next
    index++
  }
}

/**
 * Node
 * @param {any} val 
 * @param {Node} next hold the next Node reference
 */
function Node(val, next) {
  this.val = val
  this.next = next
}

module.exports.SinglyLinkedList = SinglyLinkedList