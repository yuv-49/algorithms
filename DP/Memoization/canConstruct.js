const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = word.slice(word.length);
            if (canConstruct(suffix, wordBank)) {
                memo[suffix] = true
                return true
            }
        }
    }

    memo[suffix] = false
    return false
}

// m: Target.length
// n: wordBank.length

// Brute
// Time: O(n^m * m)
// Space: O(m * m)

// memoized
// Time: O(n * m^2)
// Space: O(m * m)

console.log(canConstruct('target', ['ta', 'r', 'ge']));