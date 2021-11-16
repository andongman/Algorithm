function solution(n) {
    let answer=[];

    function hanoi(n, from, by, to){
        if(n===0) return;

        hanoi(n-1, from, to, by);
        answer.push([from, to]);
        hanoi(n-1, by, from, to);
    }
    hanoi(n, 1, 2, 3);

    return answer;
}