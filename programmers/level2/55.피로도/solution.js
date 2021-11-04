function solution(k, dungeons) {
    let max=0;

    function search(k, dungeons, count){
        if(!(dungeons.length) && max<count) max=count; 

        for(let i=0; i<dungeons.length; i++){
            let slicing= dungeons.slice(0,i).concat(dungeons.slice(i+1));
            
            if(k>=dungeons[i][0]) search(k-dungeons[i][1], slicing, count+1);
            else if(max<count) max=count;
        }
    }

    for(let i=0; i<dungeons.length; i++){
        let slicing= dungeons.slice(0,i).concat(dungeons.slice(i+1));
        if(k>=dungeons[i][0]) search(k-dungeons[i][1], slicing, 1);
    }

    return max;
}