const minIsland = (grid) => {
    const size = Infinity;
    const visited = new Set();

    for (let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++) {
            const current = explore(grid, r, c, visited);
            
            if (current < size)
                size = current;
        }
    }

    return size;
}

const explore = (grid, r, c, visited) => {
    const rowInbound = 0 <= r && r < grid.length;
    const colInbound = 0 <= c && c < grid[0].length;

    if (!rowInbound || !colInbound) return 0;
    const pow = r + ',' + c;

    if (visited.has(pow))  return 0;

    if (grid[r][c] === 'W') return 0;

    visited.add(pow);
    let count = 1;

    count += explore(grid, r, c + 1, visited)
    count += explore(grid, r, c - 1, visited)
    count += explore(grid, r + 1, c, visited)
    count += explore(grid, r - 1, c, visited)

    return count;
}
