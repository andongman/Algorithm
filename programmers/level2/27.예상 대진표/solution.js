function solution(n, a, b) {
    let answer = 1;

    while (true) {
        let min = Math.min(a, b);
        let max = Math.max(a, b);
        if ((min % 2) && min === max - 1) break;

        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }
    return answer;
}
