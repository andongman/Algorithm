function solution(brown, yellow) {
    let ary = [];
    let answer = [];
    let total = brown + yellow;

    for (let i = 1; i <= total; i++) {
        if (ary.includes(i)) break;
        if (!(total % i)) ary.push(i, total / i);
    }

    for (let i = 0; i < ary.length; i += 2) {
        let row = ary[i];
        let col = ary[i + 1];

        if (row + col === (brown + 4) / 2) {
            answer.push(col, row);
            break;
        }
    }
    return answer;
}