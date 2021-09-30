function solution(rows, columns, queries) {
    let mat = new Array(rows).fill(0).map((_, elemIdx) => new Array(columns).fill(0).map((_, idx) => elemIdx * columns + idx + 1));
    let result = [];

    queries.forEach(elem => {
        let [start_xpos, start_ypos, end_xpos, end_ypos] = elem;
        let ary = [];

        for (let i = start_ypos; i <= end_ypos; i++) {
            ary.push(mat[start_xpos - 1][i - 1]);
        }
        for (let i = start_xpos + 1; i <= end_xpos - 1; i++) {
            ary.push(mat[i - 1][end_ypos - 1]);
        }
        for (let i = end_ypos; i >= start_ypos; i--) {
            ary.push(mat[end_xpos - 1][i - 1]);
        }
        for (let i = end_xpos - 1; i >= start_xpos + 1; i--) {
            ary.push(mat[i - 1][start_ypos - 1]);
        }

        result.push(Math.min(...ary));
        ary.unshift(ary.pop());

        for (let i = start_ypos; i <= end_ypos; i++) {
            mat[start_xpos - 1][i - 1] = ary.shift();
        }
        for (let i = start_xpos + 1; i <= end_xpos - 1; i++) {
            mat[i - 1][end_ypos - 1] = ary.shift();
        }
        for (let i = end_ypos; i >= start_ypos; i--) {
            mat[end_xpos - 1][i - 1] = ary.shift();
        }
        for (let i = end_xpos - 1; i >= start_xpos + 1; i--) {
            mat[i - 1][start_ypos - 1] = ary.shift();
        }
    })

    return result;
}