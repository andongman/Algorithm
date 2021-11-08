function solution(land) {  
    let distance = [...new Array(land[0].length)];
    
    for(let i=0; i<land[0].length; i++){
        distance[i]= land[0][i];
    }

    for(let i=1; i<land.length; i++){
        let replica= distance.slice();

        for(let j=0; j<land[i].length; j++){
            let slicing = replica.slice(0,j).concat(replica.slice(j+1));
            let max= Math.max(...slicing);
            
            distance[j]= max+land[i][j];
        }
    }

    return Math.max(...distance);
}