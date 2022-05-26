const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return [ [] ];

    const totalWord = []

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [...way, word]);

            totalWord.push(...targetWays)
        }
    }

    memo[target] = totalWord
    return totalWord
}



console.log(allConstruct('target', ['ta', 'r', 'ge', 't', 'tar', 'get']));