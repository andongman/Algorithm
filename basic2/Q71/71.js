function dfs(graph, start) {
    let visited = [];
    let stack = [];
    let n;
    let child;

    stack.push(start);

    while (stack.length !== 0) {
        n = stack.pop();

        visited.push(n);

        child = graph[n].filter(v => !visited.includes(v)).reverse();

        for (let v of child) {
            stack.push(v);
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