function make_map(row, col, character_location, obstacle) {
    let map = new Array(col + 2).fill(2);

    for (let i in map) {
        map[i] = new Array(row + 2).fill(2);
    }

    for (let i = 1; i < map.length - 1; i++) {
        for (let j = 1; j < map[i].length - 1; j++) {
            map[i][j] = 0;
        }
    }

    map[character_location[0] + 1][character_location[1] + 1] = 1;

    obstacle.forEach(v => map[v[0] + 1][v[1] + 1] = 2);

    return map;
}

let row = 4;
let col = 5;
let character_location = [0, 0];
let obstacle = [[0, 1], [1, 1], [2, 3], [1, 3]];

console.log(make_map(row, col, character_location, obstacle));