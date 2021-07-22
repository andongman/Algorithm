function solution(number) {
    let res = []
    let a = 3;
    let b = 7;

    for (let i = 0; i <= number / a; i++) {
        if ((number - a * i) % b === 0) {
            res.push([i + (number - a * i) / b]);
        }
    }

    return res.length === 0 ? -1 : Number(res.reduce((a, b) => a < b ? a : b))
}

console.log(solution(24));