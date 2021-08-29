function solution(stamp, rotation) {
    let res = [];
    let rotate_ary = stamp.slice();

    while (rotation > 0) {
        let temp = [];
        let count = 0;

        for (let row = 0; row < rotate_ary[0].length; row++) {
            let ary = [];

            for (let col = 0; col < rotate_ary.length; col++) {
                count === row && ary.push(rotate_ary[col][row]);
            }

            count++;
            temp.push(ary.reverse());
        }
        rotate_ary = temp;
        rotation--;
    }

    stamp.map((col, c_idx) => {
        let ary = [];
        col.map((row, r_idx) => {
            ary.push(row + rotate_ary[c_idx][r_idx]);
        })
        res.push(ary);
    })

    return res;
}

const stamp = [[1, 1, 1, 2], [2, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]];
const rotation = 1;

console.log(solution(stamp, rotation));