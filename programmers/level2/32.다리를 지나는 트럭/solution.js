function solution(bridge_length, weight, truck_weights) {
    let queue = [];
    let executeTime = 0;

    while (true) {
        if (queue.length && queue[0][1] >= bridge_length) queue.shift();
        let sum = queue.reduce((acc, cur) => acc += cur[0], 0);
        let value = truck_weights[0] || 0;

        if (truck_weights.length && (queue.length <= bridge_length - 1) && (value + sum) <= weight) queue.push([truck_weights.shift(), 0]);

        queue = queue.map(v => [v[0], v[1] + 1]);
        executeTime++;

        if (!(queue.length)) break;
    }
    return executeTime;
}