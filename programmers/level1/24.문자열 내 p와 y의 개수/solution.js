// solution 1
// function solution(s) {
//     return s.match(/p/gi).length === s.match(/y/gi).length;
// }


//solution 2
function solution(s) {
    let pNum = 0;
    let yNum = 0;
    for (let v of s) {
        (v === 'p' || v === 'P') && pNum++;
        (v === 'y' || v === 'Y') && yNum++;
    }
    return pNum === yNum;
}