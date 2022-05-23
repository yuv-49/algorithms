const largestComponent = (graph) => {
    const largest = 0;
    const visited = new Set()

    for (let node in graph) {
        const current = Math.max(exploreGraph(graph, node, visited));

        if (current > largest) {
            largest = current
        }
    }

    return largest
}

const exploreGraph = (graph, src, visited) => {
    if (visited.has(String(src))) return false;

    let size = 1;
    visited.add(String(src));

    for(let neighbor of graph[src]) {
        size += exploreGraph(graph, neighbor, visited)
    }

    return size;
}