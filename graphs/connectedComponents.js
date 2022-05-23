const connectedNodes = (graph) => {
    let count = 0;
    const visited = new Set()

    for (let node in graph) {
        if (exploreGraph(graph, node, visited)) {
            count += 1;
        }
    }

    return count
}

const exploreGraph = (graph, src, visited) => {
    if (visited.has(String(src))) return false;

    visited.add(String(src));

    for (let neighbor of graph[src]) {
        exploreGraph(graph, neighbor, visited)
    }

    return true;
}
