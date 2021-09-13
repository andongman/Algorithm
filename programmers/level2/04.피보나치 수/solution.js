function solution(n) {
    let ary = [0, 1];
    for (let i = 2; i <= n; i++) {
        if (ary[i - 2] + ary[i - 1] >= 1234567) ary[i] = (ary[i - 2] + ary[i - 1]) % 1234567;
        else ary[i] = ary[i - 2] + ary[i - 1];
    }
    return ary[n] % 1234567;
}