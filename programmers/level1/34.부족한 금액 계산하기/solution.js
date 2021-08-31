function solution(price, money, count) {
    let fee = price * count * (count + 1) / 2;
    return (money - fee) < 0 ? Math.abs(money - fee) : 0;
}
