function solution(n) {
    let answer = [];

    if (n === 0) return 0;

    for (let i = 1; i <= n; i++) {
        if (!(n % i)) {
            if (answer.includes(i) || answer.includes(n % i)) break;
            i === n / i ? answer.push(i) : answer.push(i, n / i);
        }
    }
    return answer.reduce((a, b) => a + b);
}