function solution(arr, divisor) {
    let answer = arr.filter(v => !(v % divisor));
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}