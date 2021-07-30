function dfs(graph, start) {
    let visited = [];
    let stack = [];

    stack.push(start);

    while (stack.length != 0) {
        let n = stack.pop();
        if (!visited.includes(n)) {
            visited.push(n);
            let sub = graph[n].filter(v => !visited.includes(v));
            for (let i of sub) {
                stack.push(i);
            }
        }
    }
    return visited;
}

const graph = {
    A: ['E', 'C', 'B'],
    B: ['A'],
    C: ['A'],
    D: ['E', 'F'],
    E: ['D', 'A'],
    F: ['D'],

}



console.log(dfs(graph, 'E'));