function solution(expression) {
    let ary= permutation(["*","+","-"],3);
    let result=[];

    for(let i=0; i<ary.length; i++){
        let prior= ary[i];
        let stack=[];
        let str="";

        for(let j=0; j<expression.length; j++){
            if(expression[j]==="-" || expression[j]==="+" || expression[j]==="*"){
                stack.push(parseInt(str));
                str="";
                stack.push(expression[j]);
            }
            else str+=expression[j];
        }
        stack.push(parseInt(str));
        let count=0;

        while(count!==3){
            let idx= stack.indexOf(prior[count]);
            if(idx===-1){
                count++;
                continue;
            }
            
            if(prior[count]==="-") stack.splice(idx-1,3,stack[idx-1]-stack[idx+1]);
            else if(prior[count]==="*") stack.splice(idx-1,3,stack[idx-1]*stack[idx+1]);
            else stack.splice(idx-1,3,stack[idx-1]+stack[idx+1]);   
        }
        result.push(Math.abs(stack[0]))
    }
    return Math.max(...result);
}

function permutation(ary, len){
    let list=[];
    if(len===1) return ary.map(v=> [v]);

    for(let i=0; i<ary.length; i++){
        let replica=ary.slice(0,i).concat(ary.slice(i+1));
        let permu=permutation(replica,len-1);
        list.push(...permu.map(v=>[ary[i],...v]));
    }
    return list;
}