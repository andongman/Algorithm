function solution(info, query) {
    let set={};
    
    for(let i=0; i<info.length; i++){
        let slicing= info[i].split(" ");
        let score= +slicing.pop();
        combination(slicing, score, 0);
    }

    function combination(ary, score, start){
        let str= ary.join("");
        
        if(set[str]) set[str].push(score);
        else set[str]=[score];

        for(let i=start; i<ary.length; i++){
            let replica= ary.slice();
            replica[i]= "-";
            combination(replica, score, i+1);
        }
    }

    for(let value of Object.values(set)){
        value= value.sort((a,b)=> a-b);
    }

    let result=[];

    for(let i=0; i<query.length; i++){
        let slicing= query[i].replace(/and /g,"").split(" ");

        let score= +slicing.pop();
        let str= slicing.join("");
        
        let score_board= set[str];

        if(score_board){
            let startIdx= 0;
            let endIdx= score_board.length-1;

            // 핵심 코드
            while(startIdx<=endIdx){
                let mid= Math.floor((startIdx+endIdx)/2);

                if(score_board[mid]>=score) endIdx=mid-1;
                else startIdx=mid+1;
            }
            result.push(score_board.length - startIdx);
        }else{
            result.push(0);
        }
    }
    return result;
}