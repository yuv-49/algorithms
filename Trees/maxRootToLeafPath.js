const maxRTLPath = (root) => {

}




const maxRTLPathR = (root) => {
    if (root === null) return -Infinity;

    if (root.left === null && root.right === null) return root.val;
    
    const leftVal = maxRTLPathR(root.left)
    const rightVal = maxRTLPathR(root.right)

    return root.val + Math.max(leftVal, rightVal)
}