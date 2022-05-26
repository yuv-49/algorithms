const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let comb = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const combinations = bestSum(remainder, numbers, memo);

        if (combinations != null) {
            const combination = [ ...combinations, num];
            

            if (comb === null || combination.length < comb.length) {
                comb = combination
            }
        }
    }

    memo[targetSum] = comb;
    return comb;
}

// m = targetSum
// n = numbers.length

// Brute Force
// Time: O(n ^ m * m)
// Space: O(m ^ 2)

// Memoised
// Time: O(n * m * m)
// Space: O(m ^ 3)

console.log(bestSum(7, [5, 4, 3, 2]))