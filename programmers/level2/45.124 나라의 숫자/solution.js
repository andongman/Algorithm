function solution(n) {
    let rule = [4, 1, 2];
    let answer = [];

    while (true) {
        let quotient = Math.floor(n / 3);
        let remainder = n % 3;

        answer.push(rule[remainder]);

        if (remainder === 0) quotient -= 1;
        if (quotient === 0) break;

        n = quotient;
    }
    return answer.reverse().join("");
}