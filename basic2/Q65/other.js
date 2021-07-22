function solution1(ary1, ary2) {
    let res = ary1.map((v, idx) => {
        if (idx % 2 === 0) {
            return [v, ary2[idx]]
        }
        else {
            return [ary2[idx], v]
        }
    })


    console.log(res);
}

function solution2(ary1, ary2) {
    let res = [];
    ary1.forEach((v, idx) => {
        if (idx % 2 === 0) {
            res.push([v, ary2[idx]]);
        }
        else {
            res.push([ary2[idx], v]);
        }
    })

    console.log(res);
}


const ary1 = [1, 2, 3, 4];
const ary2 = ["a", "b", "c", "d"];

solution1(ary1, ary2);