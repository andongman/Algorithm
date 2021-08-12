function solution(ary) {
    let minesweeper = [];

    let row = ary.length;
    let col = ary[0].length;

    for (let i in ary) {
        ary[i].map((v, idx) => v === 1 && minesweeper.push([Number(i), idx]));
    }

    minesweeper.map(v => {
        let x = v[0];
        let y = v[1];

        ary[x][y] = "f";

        if ((x + 1) < row) {
            ary[x + 1][y] = "*";
        }
        if ((x - 1) >= 0) {
            ary[x - 1][y] = "*";
        }
        if ((y + 1) < col) {
            ary[x][y + 1] = "*";
        }
        if ((y - 1) >= 0) {
            ary[x][y - 1] = "*";
        }
    })
    return ary;
}

const ary = [[0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]];
console.log(solution(ary));