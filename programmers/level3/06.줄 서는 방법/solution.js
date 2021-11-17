function solution(n, k) {
    let ary= [...new Array(n)].map((_,idx)=> idx+1);
    let result=[];

    while(n!==1){
        let range= Math.ceil(k/factorial(n-1))-1;

        result.push(ary[range]);
        ary.splice(range, 1); 

        k-=range*factorial(n-1);
        n--;
    }
    result.push(ary.pop());

    return result;
}

function factorial(n){
    return (n!==1) ? n*factorial(n-1) : 1;
}