class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const a = new Node('a')
const b = new Node('b')
const v = new Node('v')
const d = new Node('d')

a.next = b;
b.next = v;
v.next = d;


const printLinkedList = (head) => {
    let current = head;
    while (current !== null) {
        console.log(current.val)
        current = current.next;
    }
}

const printLinkedListR = (head) => {
    if (head === null) return
    
    console.log(head.val);
    printLinkedList(head.next)
}

console.log(printLinkedListR(a))
