function solution(ary, n) {
    const dupAry = ary.slice();  //배열의 복사

    if (n >= ary.length) {
        n %= ary.length;
    }

    const slicing = dupAry.splice(ary.length - n);

    slicing.reverse().forEach((v) => dupAry.unshift(v));

    let res = ary.map((v, idx) => Math.abs(v - dupAry[idx]));
    let rIdx = res.indexOf(Math.min.apply(null, res));

    console.log("index :", rIdx);
    console.log("value : ", ary[rIdx], dupAry[rIdx]);
}

const n = 3;
const ary = [10, 20, 25, 27, 34, 35, 39];

solution(ary, n);
