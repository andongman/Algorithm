function solution(drag_code, same, sample) {
    let res = [];

    sample.map(v => {
        let count = 0;
        let ary = v.split("");
        for (let i = 0; i < ary.length; i++) {
            drag_code.includes(ary[i]) && count++;

            if (count > same) {
                break;
            }
        }
        count === same && res.push(v);
    });

    return res;
}

let input = "ABCDEFGH 4".split(" ");
let drag_code = input[0];
let same = parseInt(input[1], 10);
let sample = ['EFGHIJKL', 'ABCDEUJK', 'EFGHIJKM', 'EFGHIJKZ', 'ABCDEFGH', 'QWERTYUI', 'POIUYTFC', 'ADGJMBCZ', 'TUHFESXZ', 'POLKIUJQ'];

console.log(solution(drag_code, same, sample));