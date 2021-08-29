function solution(num) {
    let str = String(num).split("").reverse();

    let res = '';

    str.forEach((v, index) => {
        ((index + 1) % 3 === 0) ? (index === str.length - 1) ? (res += v) : (res += v + ',') : (res += v)
    })

    return res.split("").reverse().join("");
}

console.log(solution(123456789));

