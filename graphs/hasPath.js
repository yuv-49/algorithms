const haspath = (graph, src, dest) => {
    if(src === dest) return true;

    for (let neighbors in graph[src]) {
        if (haspath(graph, neighbors, dest)) {
            return true
        }
    }

    return false;
}

const hasPath = (graph, src, dest) => {
    const queue = [src];

    while(queue.length > 0) {
        const current = queue.shift()
        if (current === dest) {
            return true
        }

        for(let neighbors in graph[current]) {
            queue.push(neighbors)
        }
    }

    return false
}
