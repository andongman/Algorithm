function solution(orders, course) {
    let result = [];

    for (let i = 0; i < course.length; i++) {
        let ary = [];
        let obj = {};

        orders.map(v => ary.push(...combination(v.split(""), course[i])));

        ary.map(v => {
            if (obj[v]) obj[v]++;
            else obj[v] = 1;
        })

        let max = Math.max(...Object.values(obj));
        if (max >= 2) Object.entries(obj).filter(v => v[1] === max).map(v => result.push(v[0]));
    }
    return result.sort((a, b) => a.localeCompare(b));
}

function combination(ary, selectNumber) {
    let answer = [];
    if (selectNumber === 1) return ary.map(v => [v]);

    for (let i = 0; i < ary.length; i++) {
        let rest = ary.slice(i + 1);
        let combi = combination(rest, selectNumber - 1);
        answer.push(...combi.map(v => [ary[i], ...v]));
    }
    return answer.map(v => v.sort((a, b) => a.localeCompare(b))).map(v => v.join(""));
}