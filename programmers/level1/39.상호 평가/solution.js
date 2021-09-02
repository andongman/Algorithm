function solution(scores) {
    let avg = [];
    let answer = "";

    for (let i = 0; i < scores[0].length; i++) {
        let ary = [];

        for (let j = 0; j < scores.length; j++) {
            ary.push(scores[j][i]);
        }

        let min = Math.min.apply(null, ary);
        let max = Math.max.apply(null, ary);
        let myScore = ary[i];

        if ((myScore === min || myScore === max) && ary.filter(v => v === myScore).length === 1) ary.splice(i, 1);
        avg.push(ary.reduce((a, b) => a + b) / ary.length);
    };

    avg.forEach(v => {
        if (v >= 90) answer += "A";
        else if (v >= 80) answer += "B";
        else if (v >= 70) answer += "C";
        else if (v >= 50) answer += "D";
        else answer += "F"
    });
    return answer;
}