function solution(weights, head2head) {
    let ary = [];

    for (let i in head2head) {
        let weight = weights[i];
        let win = 0;
        let overWin = 0;
        let count = 0;

        for (let j in head2head) {
            if (i === j) continue;
            if (head2head[i][j] !== "N") count++;
            if (head2head[i][j] === "W") {
                win++;
                weight < weights[j] && overWin++;
            }
        }
        let rate = count ? win / count : 0;
        ary.push({ index: parseInt(i) + 1, overWin, rate, weight })
    }

    ary.sort((a, b) => {
        if (a.rate !== b.rate) return b.rate > a.rate ? 1 : -1;
        else {
            if (b.overWin !== a.overWin) return b.overWin > a.overWin ? 1 : -1;
            else {
                if (a.weight === b.weight) return a.index > b.index ? 1 : -1;
                else return b.weight > a.weight ? 1 : -1;
            }
        }
    })
    return ary.map(v => v.index);
}