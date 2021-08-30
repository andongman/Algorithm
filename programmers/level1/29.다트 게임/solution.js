function solution(dartResult) {
    let ary = [];

    for (let idx in dartResult) {
        let value = dartResult[idx].charCodeAt(0);

        if (value >= 65 && value <= 90) {
            let score = dartResult[idx - 2] === "1" ? 10 : dartResult[idx - 1];
            if (value === 83) {
                ary.push(Math.pow(score, 1));
            } else if (value === 68) {
                ary.push(Math.pow(score, 2));
            } else {
                ary.push(Math.pow(score, 3));
            }
        }

        if (dartResult[idx] === "*") {
            ary[ary.length - 1] *= 2;
            if (ary.length - 2 >= 0) ary[ary.length - 2] *= 2;
        }

        if (dartResult[idx] === "#") ary[ary.length - 1] *= -1;
    }
    return ary.reduce((a, b) => a + b);
}