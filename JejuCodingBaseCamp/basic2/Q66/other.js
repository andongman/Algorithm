function solution(top, rule) {
    let answer = [];

    for (let value of top) {
        answer.push(checkOrder(value, rule));
    }

    return answer;
}

function checkOrder(value, rule) {
    let temp = rule.indexOf(rule[0]);

    for (let v of value) {
        if (rule.includes(v)) {
            if (temp > rule.indexOf(v)) {
                return "불가능";
            }
            temp = rule.indexOf(v);
        }
    }

    return "가능"
}

const top = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

console.log((solution(top, rule)));