function solution(d, budget) {
    let price = 0;
    let res = 0;
    for (let v of d.sort((a, b) => a - b)) {
        price += v;
        if (price > budget) break;
        res++;
    }
    return res;
}