function solution(board) {
    let ary = [];

    for (let i = 0; i < board.length; i++) {
        ary.push([]);

        for (let j = 0; j < board[0].length; j++) {
            if ((i === 0 || j === 0)) ary[i][j] = board[i][j];
            else {
                if (board[i][j] === 0) ary[i][j] = 0;
                else {
                    let up = ary[i - 1][j];
                    let left = ary[i][j - 1];
                    let diag = ary[i - 1][j - 1];
                    let min = Math.min(up, left, diag);
                    ary[i][j] = min + 1;
                }
            }
        }
    }
    let answer = 0;
    ary.forEach(v => {
        let max = Math.max(...v);
        if (answer < max) answer = max;
    });

    return Math.pow(answer, 2);
}