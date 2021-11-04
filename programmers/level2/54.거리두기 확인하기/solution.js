function solution(places) {
    let answer=[];
    
    for(let i=0; i<places.length; i++){
        if(check(places[i])) answer.push(1);
        else answer.push(0);
    }
    return answer;
}

function check(place){
    for(let i=0; i<place.length; i++){
        for(let j=0; j<place[i].length; j++){
            if(place[i][j]==='P'){
                if(!(bfs(place,i,j))) return false; 
            }
        }
    }
    return true;
}

function bfs(place, row, col){
    let visited=[...Array(5)];
    
    for(let i=0; i<5; i++){
        visited[i]=[];
        for(let j=0; j<5; j++){
            visited[i][j]=false;
        }
    }
    // left right up down
    let move= [[0,-1], [0,1], [-1,0], [1,0]];

    let queue=[[row, col, 0]];
    visited[row][col]=true;

    while(queue.length){
        let [row,col,dist]=queue.pop();

        if(dist && place[row][col]==='P') return false;

        for(let i=0; i<4; i++){
            let xIdx = row + move[i][0];
            let yIdx = col + move[i][1];
    
            if(xIdx < 0 || xIdx > 4 || yIdx < 0 || yIdx > 4) continue;
            if(place[xIdx][yIdx]==='X') continue;
            if(visited[xIdx][yIdx]) continue;

            visited[xIdx][yIdx]=true;
            if(dist<2) queue.push([xIdx, yIdx, dist+1]);
        }  
    }
    return true;
}