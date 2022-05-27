const bestSum = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];

    for (let i = 0; i < target + 1; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                if (num + i <= target) {
                    let data = [...table[i], num];

                    if(table[i + num] === null || table[i + num].length > data.length) {
                        table[i + num] = data;
                    }
                }
            }
        }
    }

    return table[target]
}

console.log(bestSum(8, [2, 3, 5]))


// Time: O(m2n)
// Space: O(m2)