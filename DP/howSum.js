const howSum = (targetValue, numbers, memo = {}) => {
    if (targetValue in memo) return memo[targetValue];

    if (targetValue < 0) return null;
    if (targetValue === 0) return [];

    for(let num of numbers) {
        const rem = targetValue - num;
        const remVal = howSum(rem, numbers, memo);
        if (remVal !== null) {
            memo[targetValue] = [ ...remVal, num]
            return memo[targetValue]
        }
    }

    memo[targetValue] = null
    return memo[targetValue]
}


console.log(howSum(3000, [11, 29]))

// m: target sum
// n: numbers length

// Time: O(n*m^2)
// Space: O(m)