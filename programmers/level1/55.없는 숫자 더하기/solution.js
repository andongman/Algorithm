function solution(numbers) {
    let ary = [...Array(10)].map((_, idx) => idx);
    return ary.map(v => numbers.includes(v) ? 0 : v).reduce((acc, cur) => acc += cur, 0);
}