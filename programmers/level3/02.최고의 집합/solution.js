function solution(n, s) {
    let ary=[];

    if(n>s) return [-1];

    while(n!==0 && s!==0){
        if(n!==1){
            let min= Math.floor(s/n);   
            ary.push(min);
            s=s-min;
        }
        else{
            ary.push(s);
            s=0;
        }
        n--;
    }
    return ary.sort((a,b)=>a-b);
}