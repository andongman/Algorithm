function solution(n) {
    let count = 1;
    while (true) {
        if (n === 1) break;

        count += n % 2;
        n = Math.floor(n / 2);
    }
    return count;
} ㅇ