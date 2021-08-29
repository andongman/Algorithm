function solution(garden) {
    let changedGarden = garden.slice();
    let max = 0;
    let maxIdx = [];

    for (let col = 0; col < changedGarden.length; col++) {
        for (let row = 0; row < changedGarden[col].length; row++) {
            changedGarden[col][row] === 0 ? changedGarden[col][row] = 1 : changedGarden[col][row] = 0;
        }
    }

    for (let col = 1; col < changedGarden.length; col++) {
        for (let row = 1; row < changedGarden[col].length; row++) {
            if (changedGarden[col][row] !== 0) {
                let upper = changedGarden[col - 1][row];
                let left = changedGarden[col][row - 1];
                let diagonal = changedGarden[col - 1][row - 1];

                let min = Math.min.apply(null, [upper, left, diagonal]);
                changedGarden[col][row] = min + 1;

                //최댓값 구하기
                if (max < min + 1) {
                    max = min + 1;
                    maxIdx = [col, row];
                }
            }
        }
    }

    for (let i in changedGarden) {
        for (let j in changedGarden[i]) {
            changedGarden[i][j] !== 0 ? changedGarden[i][j] = 0 : changedGarden[i][j] = 1;
        }
    }

    for (let col = maxIdx[0] - max + 1; col < maxIdx[0] + 1; col++) {
        for (let row = maxIdx[1] - max + 1; row < maxIdx[1] + 1; row++) {
            changedGarden[col][row] = '#';
        }
    }

    return changedGarden;
}

// test 
const garden = [[0, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0]]

//test 
// const garden = [[0, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0]]

console.log(solution(garden));