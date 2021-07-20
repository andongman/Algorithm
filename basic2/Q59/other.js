function solution(s) {
    const n = 25 + parseInt(s.length / 2, 10);
    const left = s.padStart(n, '=');

    return left.padEnd(50, '=');
}

console.log(solution("hi"));