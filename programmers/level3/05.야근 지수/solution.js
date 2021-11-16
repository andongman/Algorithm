function solution(n, works) {
    let total= works.reduce((acc,cur) => acc+=cur,0);
    if(total <= n) return 0;

    works.sort((a,b)=> a-b);

    while(n!==0){
        works[works.length-1]-=1;
        n-=1;
        
        mySort(works);
    }

    return works.reduce((acc,cur)=> acc+=Math.pow(cur, 2), 0);
}

//메인 코드
function mySort(ary){
    let lastValue= ary.pop();
    let length= ary.length;
    
    for(let i=length-1; i>=0; i--){
        if(ary[i]<=lastValue){
            ary.splice(i+1, 0, lastValue);
            break;
        }
    }
    if(length===ary.length) ary.unshift(lastValue);
}