function solution(a, b) {
    let sum = 0;

    for (let idx in a) {
        sum += a[idx] * b[idx];
    }

    return sum;
}

// best solution
// function solution(a, b) {
//     return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
// }
