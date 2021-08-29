function solution(x) {
    return !(x % (String(x).split("").map(v => parseInt(v, 10)).reduce((a, b) => a + b)));
}