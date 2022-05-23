const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = constructGraph(edges)

    return hasPath(graph, nodeA, nodeB, new Set())
}

const hasPath = (graph, src, dest, visited) => {
    if (src === dest) 
        return true;
    if (visited.has(src))
        return false;

    visited.add(src)

    for (let neighbor of graph) {
        if (hasPath(graph, neighbor, dest, visited)) {
            return true
        }
    }

    return false;
}

const constructGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge
        if (!a in graph) graph[a] = [];
        if (!b in graph) graph[b] = [];

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph;
}