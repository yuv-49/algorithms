const bfs = (graph, source) => {
    const queue = [source];

    while (queue.length > 0) {
        const current = queue.shift()

        for (let neighbors of graph[current]) {
            queue.push(neighbors)
        }
    }
}
