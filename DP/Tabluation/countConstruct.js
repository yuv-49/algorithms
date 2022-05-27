const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] > 0) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i]
                }
            }
        }
    }

    return table[target.length]
}

console.log(countConstruct('target', ['ta', 'rg', 'et', "tar", "get"]))

// m: target
// n: wordBank.length

// Time: O(m2n)
// Space: O(m)