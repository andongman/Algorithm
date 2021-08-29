function solution(count) {
    let answer = "1";
    let ary = [];
    let res;
    let obj;

    if (count === 1) {
        return 1;
    }

    for (let i = 1; i < count; i++) {
        obj = {};
        res = "";
        ary = answer.split("").map(v => Number(v)).sort((a, b) => a - b);

        ary.map(v => obj[v] ? obj[v]++ : obj[v] = 1);

        Object.entries(obj).map(v => res += v[0] + v[1]);
        answer = res;
    }

    return res;
}


console.log(solution(6));