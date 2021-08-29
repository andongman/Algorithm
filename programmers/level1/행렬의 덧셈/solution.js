function solution(arr1, arr2) {
    var answer = [];
    arr1.map((col, cIdx) => {
        let ary = [];
        col.map((row, rIdx) => {
            ary.push(arr1[cIdx][rIdx] + arr2[cIdx][rIdx])
        })
        answer.push(ary);
    })
    return answer;
}