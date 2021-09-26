function solution(m, n, board) {
    let replica = [];

    for (let col = 0; col < board[0].length; col++) {
        replica.push([]);
        for (let row = board.length - 1; row >= 0; row--) {
            replica[col].push(board[row][col]);
        }
    }
    let result = 0;

    while (true) {
        let removeAry = [];
        for (let i = 0; i < board[0].length; i++) removeAry.push(new Set());

        for (let i = 1; i < replica.length; i++) {
            for (let j = 1; j < replica[i].length; j++) {
                let arrow = replica[i - 1][j - 1];
                let left = replica[i][j - 1];
                let up = replica[i - 1][j];

                if (!(replica[i][j]) || arrow !== replica[i][j] || left !== replica[i][j] || up !== replica[i][j]) continue;

                removeAry[i - 1].add(j - 1);
                removeAry[i - 1].add(j);
                removeAry[i].add(j - 1);
                removeAry[i].add(j);
            }
        }
        let size = 0;

        removeAry.forEach((v, idx) => {
            let ary = Array.from(v);
            ary.sort((a, b) => b - a).forEach(val => {
                replica[idx].splice(val, 1);
                result++;
                size++;
            });
        })
        if (!(size)) break;
    }
    return result;
}