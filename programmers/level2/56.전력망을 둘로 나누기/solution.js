function findPos(slicing, position){
    for(let i=0; i<slicing.length; i++){
        if(slicing[i].includes(position)) return i;
    }
    return -1;
}

function bfs(slicing, idx){
    let replica= slicing.slice();
    let queue=[replica[idx]];
    let count=1;

    replica.splice(idx,1);

    while(queue.length){
        let [x1,y1]=queue.pop();
        let stack=[];

        for(let i=0; i<replica.length; i++){
            if(replica[i].includes(x1) || replica[i].includes(y1)){
                queue.push(replica[i]);
                count++;
                stack.push(i);
            }
        }
        stack=stack.sort((a,b)=>b-a);

        for(let i=0; i<stack.length; i++){
            replica.splice(stack[i],1);
        }
    }
    return count;
}

function solution(n, wires) {
    let minNum=Infinity;

    for(let i=0; i<wires.length; i++){
        let slicing= wires.slice(0,i).concat(wires.slice(i+1));
        
        let xIdx= findPos(slicing, wires[i][0]);
        let yIdx= findPos(slicing, wires[i][1]);

        let xCount=xIdx===-1 ? 0 : bfs(slicing,xIdx);
        let yCount=yIdx===-1 ? 0 : bfs(slicing,yIdx);

        if(minNum>Math.abs(xCount-yCount)) minNum=Math.abs(xCount-yCount);
    }
    return minNum;
}