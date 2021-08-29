function solution() {
    let res = [];

    let repeat = length - findRange + 1;
    let count = 0;

    for (let row = 0; row < repeat; row++) {
        for (let col = 0; col < repeat; col++) {
            for (let i = row; i < row + repeat; i++) {
                for (let j = col; j < col + repeat; j++) {
                    example[i][j] === 1 && count++;
                }
            }
            res.push(count);
            count = 0;
        }
    }

    return Math.max.apply(null, res);
}

let test_case = 1;
let length = 5;
let findRange = 3;
let example = [[1, 0, 0, 1, 0], [0, 1, 0, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]];

console.log(solution());

