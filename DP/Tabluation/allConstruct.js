const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => [])
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const ways = table[i].map((el) => {
                    return [...el, word]
                })

                table[i + word.length].push(...ways)
            }
        }
    }

    return table[target.length]
}

console.log(allConstruct('abc', ['a', 'bc', 'abc']))

// m : target.length
// n: wordbank.length

// Time: O(n^m)
// space: O(n^m)