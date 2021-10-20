function solution(arr) {
    var answer = [];

    function recursive(list){
        let check=list[0][0];
        
        for(let i=0; i<list.length; i++){
            for(let j=0; j<list[i].length; j++){
                if(check!==list[i][j]){
                    check=-1;
                    break;
                }
            }
            if(check===-1) break;
        }

        if(check!==-1) answer.push(check);
        else{
            let r1=[];
            let r2=[];
            let r3=[];
            let r4=[];
            let half=list.length/2;

            for(let i=0; i<half; i++){
                r1.push([]);
                r2.push([]);
                r3.push([]);
                r4.push([]);

                for(let j=0; j<half; j++){
                    r1[i].push(list[i][j]);
                    r2[i].push(list[i][j+half]);
                    r3[i].push(list[i+half][j]);
                    r4[i].push(list[i+half][j+half]);
                }
            }
            recursive(r1);
            recursive(r2);
            recursive(r3);
            recursive(r4);
        }
    }
    recursive(arr);
    
    return answer.reduce((acc,cur)=> cur===0 ? [acc[0]+1, acc[1]] : [acc[0],acc[1]+1] ,[0,0]);
}