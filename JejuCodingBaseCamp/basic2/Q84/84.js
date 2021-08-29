function solution(number, select) {
    let ary = String(number).split('').map(v => Number(v));
    ary.sort((a, b) => b - a);

    let result = "";

    for (let idx in ary) {
        if (Number(idx) === select) {
            break;
        }
        result += ary[idx];
    }
    return result;
}

console.log(solution(1723, 3));