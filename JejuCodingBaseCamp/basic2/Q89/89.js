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

    console.log(map);
    return map;
}

function move(map, movement) {
    let character_location = [];
    for (let i in map) {
        if (map[i].indexOf(1) >= 0) {
            let c_xpos = parseInt(i, 10);
            let c_ypos = map[i].indexOf(1);
            character_location.push(c_xpos, c_ypos);
            map[c_xpos][c_ypos] = 0;
        }
    };

    movement.forEach(v => {
        (v === 1 && map[character_location[0] - 1][character_location[1]] !== 2) && character_location[0]--;
        (v === 2 && map[character_location[0] + 1][character_location[1]] !== 2) && character_location[0]++;
        (v === 3 && map[character_location[0]][character_location[1] - 1] !== 2) && character_location[1]--;
        (v === 4 && map[character_location[0]][character_location[1] + 1] !== 2) && character_location[1]++;
    });

    map[character_location[0]][character_location[1]] = 1;
    console.log(map);
    return character_location;
}

let row = 4;
let col = 5;
let character_location = [0, 0];
let obstacle = [[0, 1], [1, 1], [2, 3], [1, 3]];

console.log("캐릭터 이동 전 지도");
let map = make_map(row, col, character_location, obstacle);

let movement = [2, 2, 2, 4, 4, 4];
console.log("캐릭터 이동 후 지도");
console.log("캐릭터위치 :", move(map, movement));
