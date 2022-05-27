class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const a = new Node(1)
const b = new Node(2)
const v = new Node(3)
const d = new Node(4)

a.next = b;
b.next = v;
v.next = d;

const find = (head, target) => {
    let current = head;
    while (current !== null) {
        if (target === current.val) return true;
        current = current.next;
    } 

    return false
}

const findV = (head, target) => {
    if (head === null) return false;
    if (head.val === target) return true;
    
    return findV(head.next, target)
}

console.log(findV(a, 2))
