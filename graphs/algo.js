const dfs = (graph, source) => {
    const stack = [source];

    while (stack.length > 0) {
        const current = stack.pop();

        console.log("current", current);

        for (let neighbors in graph[current]) {
            stack.push(neighbors)
        }
    }
}

const dfsR = (graph, source) => {
    console.log(source);

    for (let neighbors in graph[source]) {
        dfsR(graph, neighbors)
    }
}

const bfs = (graph, source) => {
    const queue = [source];

    while (queue.length > 0) {
        const current = queue.shift()

        for (let neighbors in graph[current]) {
            queue.push(neighbors)
        }
    }
}
