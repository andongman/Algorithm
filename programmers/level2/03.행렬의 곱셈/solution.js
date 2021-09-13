function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let ary = arr1[i];
        answer.push([]);
        for (let row = 0; row < arr2[0].length; row++) {
            let sum = 0;
            for (let col = 0; col < arr2.length; col++) {
                sum += ary[col] * arr2[col][row];
            }
            answer[i].push(sum);
        }
    }
    return answer;
}