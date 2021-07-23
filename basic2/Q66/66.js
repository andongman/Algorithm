function solution(top, rule) {
    let temp = [];
    let res = [];

    top.map((v, idx) => {
        temp.push([]);
        v.split("").map((value, index) => {
            if (value === rule[0] || value === rule[1] || value === rule[2]) {
                if (value === rule[0]) {
                    temp[idx].push(0);
                }
                else if (value === rule[1]) {
                    temp[idx].push(1);
                }
                else if (value === rule[2]) {
                    temp[idx].push(2);
                }
            }
        })
    });

    // let cmp = [];
    // temp.map(v =>
    //     cmp.push(v.slice())
    // )

    let cmp = temp;

    temp.map((v, idx) => {
        // cmp[idx].join("") === v.sort((a, b) => a - b).join("") ? res.push("가능") : res.push("불가능")
        v.join("") === v.sort((a, b) => a - b).join("") ? res.push("가능") : res.push("불가능")
    });

    return console.log(res);
}

const top = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

solution(top, rule);

