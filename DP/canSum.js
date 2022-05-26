const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    if (targetSum in memo) return memo[targetSum];

    for (let number of numbers) {
       
        if (canSum(targetSum - number, numbers, memo)) {
            memo[targetSum] = canSum(targetSum - number, numbers, memo);
            return true
        }
    }

    memo[targetSum] = false
    return false;
}

console.log(canSum(3000, [11, 29]))

//  Time: O(m * n)
//  Space: O(m * n)