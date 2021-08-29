/**
 * 짝수라면 2로 나눈다
 * 홀수라면 3을 곱하고 1을 더한다
 * 1이 될때까지 반복한다(단, 500번 반복해도 안되면 -1 반환)
 */

function solution(num) {
    let answer = 0;
    while (num !== 1) {
        num % 2 ? num = num * 3 + 1 : num /= 2;
        answer++;
        if (answer === 500) return -1;
    }
    return answer;
}
