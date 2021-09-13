function solution(arr) {
    let answer = arr.shift();

    while (arr.length) {
        let value = arr.shift();
        let gcf = 1;
        let min = Math.min(answer, value);

        for (let i = 2; i <= min; i++) {
            if (!(answer % i) && !(value % i)) gcf = i;
        }

        answer = (answer * value) / gcf;
    }
    return answer;
}