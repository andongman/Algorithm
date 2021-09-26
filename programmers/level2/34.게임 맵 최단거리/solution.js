function solution(maps) {
    let queue = [[0, 0, 1]];
    maps[0][0] = 0;
    let answer = 10000;

    //right left  bottom top
    let xpos = [0, 0, 1, -1];
    let ypos = [1, -1, 0, 0];

    while (queue.length) {
        let [x, y, count] = queue.shift();
        if (x === maps.length - 1 && y === maps[0].length - 1 && answer > count) answer = count;

        for (let i = 0; i < 4; i++) {
            let xIdx = x + xpos[i];
            let yIdx = y + ypos[i];

            if (xIdx < 0 || xIdx > maps.length - 1 || yIdx < 0 || yIdx > maps[0].length - 1) continue;

            if (maps[xIdx][yIdx]) {
                maps[xIdx][yIdx] = 0;
                queue.push([xIdx, yIdx, count + 1]);
            }
        }
    }
    return answer === 10000 ? -1 : answer;
}