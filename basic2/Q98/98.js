function solution(input) {
    let ary = [];

    input.split(" ").forEach((v, index) => {
        index % 2 === 1 && ary.push(...v.split(",").map(v => parseInt(v, 10)));
    })

    return Array.from(new Set(ary));
}

//test
let input = "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3";

//test
// let input = "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4";

console.log("출력", solution(input));