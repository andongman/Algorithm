function solution(n, t, m, p) {
    let order = [];
    for (let i = 0; i < t; i++) {
        order.push(m * i + p - 1);
    }

    let num = "";
    for (let i = 0; ; i++) {
        if (num.length > order[order.length - 1]) break;
        num += i.toString(n).toUpperCase();
    }

    return order.reduce((acc, cur) => acc += num[cur], "");
}