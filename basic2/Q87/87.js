function solution(names, dishes) {
    let obj = {};

    names.map((_, idx) => obj[names[idx]] = dishes[idx]);

    let res = Object.entries(obj).sort((a, b) => b[1] - a[1]).map((v, idx) => {
        let value = [...v];
        value[1] = idx + 1;
        return value;
    });

    return res;
}

//test
const names = ["홍길동", "엄석대", "연개소문", "김첨지"];
const dishes = [2, 1, 10, 0];

//test
// const names = ["손오공", "야모챠", "메지터", "비콜로"];
// const dishes = [70, 10, 55, 40];

console.log(solution(names, dishes));

