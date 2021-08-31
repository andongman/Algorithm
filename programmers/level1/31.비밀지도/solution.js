function solution(n, arr1, arr2) {
    let ary = [];
    let answer = [];

    arr1.forEach((v) => {
        ary.push(v.toString(2).padStart(n, 0).split(""));
    });

    arr2.forEach(((v, cIdx) => {
        let bin = v.toString(2).padStart(n, 0).split("");
        ary[cIdx].forEach((val, rIdx) => {
            ary[cIdx][rIdx] = (bin[rIdx] === '0' && val === '0') ? 0 : 1;
        });
    }));

    ary.map(col => {
        let str = "";
        col.map(v => {
            str += v === 1 ? "#" : " ";
        })
        answer.push(str);
    })

    return answer;
}