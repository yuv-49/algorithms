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


const sumList = (head) => {
    let sum = 0;
    let current = head;

    while(current !== null) {
        sum += current.val;
        current = current.next;
    }

    return sum;
}

const sumListR = (head) => {
    if (head === null) return 0;
    return head.val + sumListR(head.next);
}

console.log(sumListR(a))