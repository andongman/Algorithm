function solution(ary1, ary2) {
    if (ary1.length !== ary2.length) {
        return console.log("Not same length");
    }
    let res = [];

    for (let v in ary1) {
        res.push([]);
        v % 2 === 0 ? (res[v][0] = ary1[v]) : (res[v][1] = ary1[v]);
    }

    for (let v in ary2) {
        v % 2 === 0 ? (res[v][1] = ary2[v]) : (res[v][0] = ary2[v]);
    }

    return console.log(res);
}

const ary1 = [1, 2, 3, 4];
const ary2 = ["a", "b", "c", "d"];

solution(ary1, ary2);