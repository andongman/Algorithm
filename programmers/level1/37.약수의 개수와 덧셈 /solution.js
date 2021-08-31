function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        let ary = [];

        for (let j = 1; j <= i; j++) {
            if (!(i % j)) {
                if (ary.includes(i / j)) break;
                j === i / j ? ary.push(j) : ary.push(j, i / j);
            }
        }
        answer = ary.length % 2 ? answer - i : answer + i;
    }
    return answer;
}