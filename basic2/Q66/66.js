function solution(top, str) {
    let temp = [];
    let res = [];

    top.map((v, idx) => {
        temp.push([]);
        v.split("").map((value, index) => {
            if (value === "A" || value === "B" || value === "C") {
                if (value === "A") {
                    temp[idx].push(0);
                }
                else if (value === "B") {
                    temp[idx].push(1);
                }
                else if (value === "C") {
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
        cmp[idx].join("") === v.sort((a, b) => a - b).join("") ? res.push("가능") : res.push("불가능")
    });

    return console.log(res);
}

const top = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

solution(top, rule);

