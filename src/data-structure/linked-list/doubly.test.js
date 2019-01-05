const { DoublyLinkedList } = require('./index')

function printList(dlist) {
  let listStr = "{ "
  dlist.traversal((node, idx) => {
    // listStr += `[${idx} -> ${node.val}], `
    if(idx !== dlist.length-1) {
      listStr += `${node.val} -> `
    }
    else {
      listStr += `${node.val}`
    }
  })
  listStr += " }"
  return listStr
} 
describe('doubly linked list', () => {
  it('log { 1 -> 2 -> 3 }', () => {
    const dlist = new DoublyLinkedList()
    dlist.addToTail(2)
    dlist.addToHead(1)
    dlist.addToTail(3)

    expect(printList(dlist)).toBe("{ 1 -> 2 -> 3 }")
  })

  it('log { 1 -> 3 }', () => {
    const dlist = new DoublyLinkedList()
    dlist.addToTail(2)
    dlist.addToTail(3)
    dlist.rmFromHead()
    dlist.addToHead(1)

    expect(printList(dlist)).toBe("{ 1 -> 3 }")
  })
})