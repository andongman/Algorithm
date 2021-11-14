function solution(n) {
    let ary=[];

    for(let i=0; i<n; i++){
        if(i===0 || i===1) ary[i]=i+1;
        else ary[i]=(ary[i-1]+ary[i-2])%1234567;
    }
    return ary[n-1];
}