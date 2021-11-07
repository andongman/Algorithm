function solution(relation) {
    let kinds= [];
    let result=[];

    //relation의 column 길이를 활용하여 combination 구하기
    combination([...new Array(relation[0].length)].map((_,idx)=> idx), [] ,kinds);

    //길이를 기준으로 오름차순 정렬
    kinds= kinds.sort((a,b) => a.length- b.length);

    let board=[];
    //인덱스별로 데이터 분리
    for(let i=0; i<relation.length; i++){
        for(let j=0; j<relation[i].length; j++){
            if(!(board[j])) board[j]=[];
            board[j].push(relation[i][j]);
        }
    }  

    for(let i=0; i<kinds.length; i++){
        let check=false;

        //최소성 검사하는 로직
        for(let j=0; j<result.length; j++){
            let convertAry= result[j].split(",");
            let count=0;

            for(let k=0; k<convertAry.length; k++){
                if(kinds[i].includes(Number(convertAry[k]))) count++;
            }

            //최소성 위반하는 경우
            if(count===convertAry.length){
                check=true;
                break;
            }
        }
        //최소성 위반하는 경우, continue 실행
        if(check) continue;

        let ary=[];
        for(let j=0; j<relation.length; j++){
            let str="";

            for(let k=0; k<kinds[i].length; k++){
                str+=(k!==kinds[i].length-1) ? board[kinds[i][k]][j]+"," : board[kinds[i][k]][j];
            }
            ary.push(str);
        }

        //유일성 체크
        if(ary.length === new Set(ary).size) {
            let str="";
            kinds[i].map((v,idx)=> str += (idx!==kinds[i].length-1) ? v+"," : v);
            result.push(str);
        }
    }
    return result.length;
}

function combination(ary, kind,kinds){
    for(let i=0; i<ary.length; i++){
        let sample= kind.slice();
        let replica= ary.slice(i+1);

        sample.push(ary[i]);
        kinds.push(sample);
        
        combination(replica, sample, kinds);
    }
}