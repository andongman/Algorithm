// function solution(a, b) {
//     let min = Math.min.apply(null, [a, b]);
//     let max = Math.max.apply(null, [a, b]);
//     let count = min;
//     let ary = new Array(max - min + 1).fill(0).map((v, idx) => count++)

//     return ary.reduce((a, b) => a + b);
// }

function solution(a, b) {
    let min = Math.min.apply(null, [a, b]);
    let max = Math.max.apply(null, [a, b]);

    let answer = 0;

    for (let i = min; i <= max; i++) {
        answer += i;
    }
    return answer;
}

console.log(solution(3, 5));
