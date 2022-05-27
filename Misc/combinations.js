const combination = (elements) => {
    if (elements.length === 0) return [ [ ] ];

    const firstEl = elements[0];
    const rest = elements.slice(1);

    const combsWithoutFirst = combination(rest);
    const combsWithFirst = []

    combsWithoutFirst.forEach(comb => {
        const combWithFirst = [...comb, firstEl];
        combsWithFirst.push(combWithFirst)
    })

    return [...combsWithFirst, ...combsWithoutFirst]
}

// Time: O(2^n)
// Space: O(n*n)



// Youtube: https://www.youtube.com/watch?v=oBt53YbR9Kk&list=WL&index=1&t=121s
