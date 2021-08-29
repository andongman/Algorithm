function solution(n) {
    return n.toString().split("").map(v => parseInt(v, 10)).reduce((a, b) => a + b);
}
