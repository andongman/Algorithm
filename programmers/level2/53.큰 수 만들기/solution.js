function solution(number, k) {
    let answer=[];
    let delCount=k;
    let idx=0;

    answer.push(number[idx++]);

    while(answer.length < number.length-k || idx<number.length){
        if(!!delCount && answer[answer.length-1]<number[idx]){
            answer.pop();
            delCount--;
            continue;
        }
        answer.push(number[idx++]);
    }

    return answer.slice(0, answer.length-delCount).join("");
}