function solution(answers) {
    let rule = ["12345", "21232425", "3311224455"];
    let length = answers.length;
    let mans = [];

    rule.forEach(v => {
        mans.push(v.repeat(Math.floor(length / v.length) + 1).slice(0, length));
    })
    let ary = [];

    mans.forEach((v, idx) => {
        let count = 0;
        v.split("").forEach((v, idx) => {
            parseInt(v) === answers[idx] && count++;
        });
        count !== 0 && ary.push({ count, idx: idx + 1 });
    })
    let max = Math.max(...ary.map(v => v.count));

    return ary.filter(v => v.count === max).map(v => v.idx);
}