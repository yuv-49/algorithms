class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')

a.left = b;
a.right = c;
b.left = d;
b.right = e;


const dfsTraversal = (root) => {
    if (root === null) return [];

    const result = [];
    const stack = [ root ];

    while (stack.length > 0) {
        const current = stack.pop()
        result.push(current.val);

        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }

    return result;
}

const dfsRTraversal = (root) => {
    if (root === null) return []
    console.log(root.val);

    const leftVal = dfsRTraversal(root.left)
    const rightVal = dfsRTraversal(root.right)

    return [root.val, ...leftVal, ...rightVal]
}

