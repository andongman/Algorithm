function solution(N, stages) {
    let ary = new Array(N).fill(0);
    let length = stages.length;

    for (let i in ary) {
        let count = 0;
        stages.forEach(v => {
            if (v === (parseInt(i) + 1)) count++;
        })
        ary[i] = length === 0 ? 0 : count / length;
        length -= count;
    }
    let res = [];

    ary.slice().sort((a, b) => b - a).map(v => {
        let index = ary.indexOf(v);
        res.push(index + 1);
        ary[index] = -1;
    })
    return res;
}