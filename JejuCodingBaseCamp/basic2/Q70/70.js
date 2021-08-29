function solution(a, b) {
    let a_row = a.length;
    let a_col = a[0].length;

    let b_row = b.length;
    let b_col = b[0].length;

    let res = [];

    for (let v of a) {
        if (v.length !== a_col) {
            return -1;
        }
    }

    for (let v of b) {
        if (v.length !== b_col) {
            return -1;
        }
    }

    if (a_col !== b_row) {
        return -1;
    }

    let sum = 0;

    for (let v of a) {
        res.push([]);

        for (let i in b[0]) {

            for (let j in b) {
                sum += v[j] * b[j][i];
            }

            res[res.length - 1].push(sum);
            sum = 0;
        }
    }

    return res;
}

// test 1
// let a = [[1, 2, 3], [4, 5, 6]];
// let b = [[1, 4], [2, 5], [3, 6]];


//test 2
// let a = [[1, 2], [2, 4]];
// let b = [[1, 0], [0, 3]];

//test 3
let a = [[1, 0, 0], [2, 1, 0], [0, 0, 1]];
let b = [[1, 2, 3], [1, 1, 1], [0, 1, 3]];


console.log(solution(a, b));