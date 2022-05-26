const gridTraveller = (m, n, memo = {}) => {
    const pos = m + ',' + n;

    if (pos in memo) return memo[pos];
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;

    memo[pos] = gridTraveller(m, n - 1, memo) + gridTraveller(m - 1, n, memo);
    return memo[pos];
}


console.log(gridTraveller(18, 18))

// Time: O(m+n)
// Space: O(m+n)