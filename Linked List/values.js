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


//// 1
const values = (head) => {
    const value = [];
    let current = head;
    while (current !== null) {
        value.push(current.val)
        current = current.next;
    }

    return value
}

/// 2

const valuesR = (head) => {
    if (head === null) return []

    const value = valuesR(head.next);


    return [ head.val, ...value ]
}

/// 3

const valuesRNew = (head) => {
    const value = [];
    fliiValues(head, value)

    return value;
}

const fliiValues = (head, value) => {
    if (head === null) return;

    value.push(head.val)
    fliiValues(head.next)

    return value
}  

console.log(valuesRNew(a))
