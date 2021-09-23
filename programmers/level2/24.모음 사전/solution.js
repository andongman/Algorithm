function solution(word) {
    let ary = [1, 2, 3, 4, 5];
    let answer = [];
    for (let i = 0; i < ary.length; i++) {
        answer.push(String(ary[i]));
        for (let j = 0; j < ary.length; j++) {
            answer.push(String(ary[i]) + String(ary[j]));
            for (let k = 0; k < ary.length; k++) {
                answer.push(String(ary[i]) + String(ary[j]) + String(ary[k]));
                for (let l = 0; l < ary.length; l++) {
                    answer.push(String(ary[i]) + String(ary[j]) + String(ary[k]) + String(ary[l]));
                    for (let m = 0; m < ary.length; m++) {
                        answer.push(String(ary[i]) + String(ary[j]) + String(ary[k]) + String(ary[l]) + String(ary[m]));
                    }
                }
            }
        }
    }
    const pattern = { A: 1, E: 2, I: 3, O: 4, U: 5 };
    let result = "";
    [...word].forEach(v => result += pattern[v]);

    return answer.sort().indexOf(result) + 1
}