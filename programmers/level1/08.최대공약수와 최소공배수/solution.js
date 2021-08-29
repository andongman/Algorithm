function solution(n, m) {
    let min = Math.min.apply(null, [n, m]);
    //a1 = 최대공약수
    let a1 = 1;

    for (let i = 2; i <= min; i++) {
        if (!(n % i) && !(m % i)) {
            if (a1 < i) a1 = i;
        }
    }
    return [a1, n * m / a1];
}