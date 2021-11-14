function solution(A, B) {
    let result=0;

    A.sort((a,b)=>b-a);
    B.sort((a,b)=>a-b);

    for(let i=0; i<A.length; i++){
        let value= B[B.length-1];
        
        if(value > A[i]){
            B.pop();
            result++;
        }
    }

    return result;
}