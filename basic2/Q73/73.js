function shortPath(graph, startNode, endNode) {
    let visited = [];
    let queue = [];
    let count = -1;
    let conn, size, node;


    queue.push(startNode);

    while (queue.length !== 0) {
        count++;
        size = queue.length;

        for (let i = 0; i < size; i++) {
            node = queue.shift();

            visited.push(node);

            if (node === endNode) {
                return count;
            }

            conn = graph[node].filter(v => !visited.includes(v)).filter(v => !queue.includes(v));

            for (let v of conn) {
                queue.push(v);
            }
        }
    }

    return "이어진 경로가 없습니다";
}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
}

console.log(shortPath(graph, 'A', 'F'));

