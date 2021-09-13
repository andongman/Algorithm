function solution(n) {
    var answer = 0;

    for (let i = 1; i <= n; i++) {
        let value = 2 * n + Math.pow(i, 2) - i;

        for (let j = Math.floor(Math.sqrt(value)); j <= n; j++) {
            if (j * (j + 1) === value) {
                answer++;
                break;
            }
            else if (j * (j + 1) > value) break;
        }
    }
    return answer;
}

console.log(solution(15));