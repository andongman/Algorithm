function bfs(graph, startNode) {
    let res = [];
    let queue = [];
    let n;
    let child;

    queue.push(startNode);

    while (queue.length !== 0) {
        let n = queue.shift();
        res.push(n);

        child = graph[n].filter(v => !res.includes(v));

        for (let v of child) {
            queue.push(v);
        }

    }

    return res;
}

const graph = {
    E: ['D', 'A'],
    F: ['D'],
    A: ['E', 'C', 'B'],
    B: ['A'],
    C: ['A'],
    D: ['E', 'F'],
}

console.log(bfs(graph, 'E'));
