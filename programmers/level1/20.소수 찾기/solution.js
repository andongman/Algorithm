function solution(n) {
    let ary = new Array(n + 1).fill(0).map((_, idx) => idx);
    ary[1] = 0;

    for (let i = 2; i <= ary.length; i++) {
        if (ary[i] === 0) continue;

        for (let j = i * 2; j <= ary.length; j += i) {
            ary[j] = 0;
        }
    }
    return ary.filter(v => v !== 0).length;
}