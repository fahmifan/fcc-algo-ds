const { SinglyLinkedList } = require('./index')

function printList(slist) {
  let listStr = "{ "
  slist.traversal((node, idx) => {
    // listStr += `[${idx} -> ${node.val}], `
    if(idx !== slist.length-1) {
      listStr += `${node.val} -> `
    }
    else {
      listStr += `${node.val}`
    }
  })
  listStr += " }"
  return listStr
} 
describe('singly linked list', () => {
  it('log { 1 -> 2 -> 3 }', () => {
    const slist = new SinglyLinkedList()
    slist.addToHead(3)
    slist.addToHead(2)
    slist.addToHead(1)

    expect(printList(slist)).toBe("{ 1 -> 2 -> 3 }")
  })

  it('log { 2 -> 3 }', () => {
    const slist = new SinglyLinkedList()
    slist.addToHead(3)
    slist.addToHead(2)
    slist.addToHead(1)

    expect(slist.removeFromHead().val).toEqual(1)
    expect(printList(slist)).toBe("{ 2 -> 3 }")
  })
})