function solution(n, lost, reserve) {
    let ary = new Array(n).fill(1);

    reserve.forEach(v => ary[v - 1]++);
    lost.forEach(v => ary[v - 1]--);

    for (let i = 0; i < n; i++) {
        if (ary[i] === 0 && ary[i - 1] === 2) {
            ary[i - 1]--;
            ary[i]++;
        } else if (ary[i] === 0 && ary[i + 1] === 2) {
            ary[i + 1]--;
            ary[i]++;
        }
    }

    return ary.filter(v => v > 0).length;
}