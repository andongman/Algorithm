function solution(a, b) {
    let res = [];
    let idx;

    for (let v in b) {
        idx = Number(v) + 1;  //주의할 점 : type(v) === string

        while (true) {
            if (!a.includes(b.slice(v, idx)) || idx > b.length) {
                idx--;
                break;
            }
            idx++;
        }
        res.push(idx - v);
    }

    // console.log("res", res); 
    return Math.max.apply(null, res);
}

// case 1
// let a = "THISISSTRINGS";
// let b = "THISIS";

//case 2
// let a = "THISISSTRINGS";
// let b = "TATHISISKKQQAEW";

//case 3
// let a = "THISISSTRINGS";
// let b = "KIOTHIKESSISKKQQAEW";

//case 4
let a = "THISISSTRINGS";
let b = "TKHKIKSIS";

console.log(solution(a, b));