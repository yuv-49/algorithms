const treeSum = (root) => {
    if (root === null) return 0;
    let sum = 0;

    const queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val) {
            sum += current.val
        }

        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }

    return sum;
}

const treeSumDFS = (root) => {
    if (root === null) return 0;
    let sum = 0;

    const stack = [ root ];

    while(stack.length > 0) {
        const current = stack.pop();

        if (current.val) {
            sum += current.val
        }

        if (current.left) stack.push(current.left)
        if (current.right) stack.push(current.right)
    }
}

const treeSumRDFS = (root) => {
    if (root === null) return 0;

    let sum = root.val;

    sum += treeSumRDFS(root.left)
    sum += treeSumRDFS(root.right)

    return sum;
}