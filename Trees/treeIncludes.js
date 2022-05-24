const treeIncludes = (root, target) => {
    if (root === null) return false;

    const queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift()

        if (current.val === target) 
            return true
        if (root.left) queue.push(root.left)
        if (root.right) queue.push(root.right)
    }

    return false
}

const treeRDFS = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;

    const left = treeRDFS(root.left, target)
    const right = treeRDFS(root.right, target)

    return left || right
}