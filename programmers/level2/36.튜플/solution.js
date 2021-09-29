function solution(s) {
    let replica = s.slice(1, s.length - 1).split("");
    let ary = [];
    let result = [];

    while (replica.length) {
        let leftBracket = replica.indexOf("{");
        let rightBracket = replica.indexOf("}");

        if (leftBracket === -1 || rightBracket === -1) break;

        let unit = replica.splice(leftBracket, rightBracket - leftBracket + 1);
        unit = unit.slice(1, unit.length - 1).join("").split(",").map(v => parseInt(v));

        ary.push(unit);
    }
    ary.sort((a, b) => a.length - b.length).map(ele => {
        ele.map(v => {
            if (!(result.includes(v))) result.push(v);
        })
    })

    return result;
}

//best code
// const tupleFrom = (str) =>
//     str.slice(2, -2).split('},{')
//         .map((it) => toNumbers(it))
//         .sort(accendingByLength)
//         .reduce((acc, cur) =>
//             [...acc, ...cur.filter((it) => !acc.includes(it))], []);

// const toNumbers = (str) => str.split(',').map(it => Number(it));

// const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;

// const solution = (s) => tupleFrom(s);

