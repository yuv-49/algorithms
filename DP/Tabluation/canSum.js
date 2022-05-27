const canSum = (target, number) => {
    const table = Array(target + 1).fill(true);

    for (let i = 0; i <= target ; i++) {
        if (table[i]) {
            for (let num in number) {
                table[i + num] = true
           }
        }
    }

    return table[target]
}
