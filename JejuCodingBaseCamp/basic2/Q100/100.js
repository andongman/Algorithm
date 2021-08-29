/**
 * N * M 으로 이루어진 퍼즐
 * blue : 1
 * red : 2,
 * yellow : 3,
 * green : 4,
 * orange : 5
 * 빈 곳을 선택하면 -1
 */

function solution(puzzleBoard, operation) {
    //퍼즐판의 세로 길이
    let col = puzzleBoard.length;
    //퍼즐판의 가로 길이
    let row = puzzleBoard[0].length;

    let board = [];

    for (let i = 0; i < row; i++) {
        board.push([]);

        for (let j = 0; j < col; j++) {
            puzzleBoard[j][i] && board[i].unshift(puzzleBoard[j][i]);
        }
    }

    //점수판
    let scoreBoard = [];

    //점수판의 점수
    let score = 0;

    operation.map(op => {
        let value = op - 1;

        if (board[value].length) {
            let v = board[value].pop();

            if (scoreBoard[scoreBoard.length - 1] === v && scoreBoard.length) {
                scoreBoard.pop();
                score += v * 2;
            } else {
                scoreBoard.push(v);
            }

        } else {
            score -= 1;
        }
    })
    return score;
}

const puzzleBoard = [[0, 0, 0, 0], [0, 1, 0, 3], [2, 5, 0, 1], [2, 4, 4, 1], [5, 1, 1, 1]];
const operation = [1, 1, 1, 1, 3, 3, 3];

console.log(`점수는 ${solution(puzzleBoard, operation)}점입니다.`);