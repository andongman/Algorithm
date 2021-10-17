function solution(n, left, right) {
    let ary=[];
    let equotient= Math.floor(left/n);
    let count= equotient+1;
    left -=equotient*n;
    right-=equotient*n;

    while(true){
        for(let i=1; i<=count; i++){
            ary.push(count);
        }
        for(let i=count+1; i<=n; i++){
            ary.push(i);
        }

        if(ary.length+1>=right) return ary.slice(left,right+1);
        count++;
    }
}