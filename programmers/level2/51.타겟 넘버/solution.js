//테스트 케이스 1~2번 실패
function mysolution(numbers, target) {
    let queue=[0];
    let max=numbers.reduce((acc,cur) =>acc+=cur, 0);

    for(let i=0; i<numbers.length; i++){
        let value= numbers[i];
        let len=queue.length;

        if(i>0) max-=numbers[i-1];
        
        for(let j=0; j<len; j++){
            let sum=queue.shift();
            if(max+sum <target) continue;

            queue.push(sum+value, sum-value);
        }
    }
    return queue.filter(v=> v===target).length;
}

//성공한 코드
function solution(numbers, target) {
    var answer = 0;
    recursive(0,0);

    function recursive(sum, index){
        if(index<numbers.length){
            recursive(sum+numbers[index], index+1);
            recursive(sum-numbers[index], index+1);
        }else{ 
            if(sum===target) answer++;
        }
    }
    return answer;
}