function solution(s) {
    let middle = Math.floor(s.length / 2);
    return s.length % 2 ? s[middle] : s[middle - 1] + s[middle];
}