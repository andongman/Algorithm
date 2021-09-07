function solution(board, moves) {
    let ary = [];
    for (let i = 0; i < board.length; i++) ary.push([]);

    let moveBox = [];
    let answer = 0;

    for (let i = 0; i < board[0].length; i++) {
        for (let j = 0; j < board.length; j++) {
            board[j][i] && ary[i].unshift(board[j][i]);
        }
    }

    moves.forEach(v => ary[v - 1].length && moveBox.push(ary[v - 1].pop()))

    for (let i = 0; i < moveBox.length; i++) {
        if (moveBox[i] === moveBox[i + 1]) {
            answer += 2;
            moveBox.splice(i, 2);
            i === 0 ? i -= 1 : i -= 2;
        }
    }
    return answer;
}