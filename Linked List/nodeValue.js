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


const nodeValue = (head, index) => {
    let current = head;
    let idx = 0;

    while (current !== null) {
        if (idx === index) {
            return current.val
        }
        idx += 1;
        current = current.next;
    }

    return null
}


const nodeValueR = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;

    return nodeValueR(head.next, index -= 1)
}


console.log(nodeValueR(a, 20))