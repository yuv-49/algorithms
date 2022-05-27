const howSum = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];

    for (let i = 0; i < target + 1; i++) {
        if (table[i] != null) {
            for (let number of numbers) {
                if ((i + number) <= target ) {
                    table[i + number] = [ ...table[i], number]
                }
            }
        }
    }

    return table[target]
}

console.log(howSum(7, [5, 3, 4]))

// Time: O(mmn)