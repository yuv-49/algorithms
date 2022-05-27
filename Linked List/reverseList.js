const reverseList = (head) => {
    let current = head;
    let prev = null;
    

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev
}

const reverselistR = (head, prev = null) => {
    if (head === null) return prev;

    const next = head.next;
    head.next = prev;
    return reverselistR(next, head)
}