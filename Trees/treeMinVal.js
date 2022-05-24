const treeMinVal = (root) => {
    if (root === null) return 999;
    let minVal = Infinity;

    const queue = [ root ]

    while(queue.length > 0) {
        const current = queue.shift();

        if (current.val < minVal) {
            minVal = current.val
        }

        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }

    return minVal;
}

const treeMinR = (root) => {
    if (root === null) return 999;
    let minVal = Infinity;

    if (root.val < minVal) {
        minVal = root.val
    }

    const leftMin = treeMinR(root.left)
    const rightMin = treeMinR(root.right)

    return Math.min(minVal, leftMin, rightMin)
}