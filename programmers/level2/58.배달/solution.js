function solution(N, road, K) {
    let graph=[...new Array(N+1)];

    for(let i=0; i<graph.length; i++){
        graph[i]= [...new Array(N+1)].fill(Infinity);

        for(let j=0; j<graph[i].length; j++){
            if(i===j) graph[i][j] = 0;
        }
    }

    //graph 초기화하는 로직
    for(let i=0; i<road.length; i++){
        let [from, to, dist]=road[i];

        graph[to][from]=Math.min(graph[to][from],dist);
        graph[from][to]=Math.min(graph[from][to],dist);
    }

    let visited = [...new Array(N+1)].fill(false);
    let lists= [...new Array(N+1)].fill(Infinity);

    let startNode= 1;
    visited[startNode]=true;

    for(let i=1; i<lists.length; i++){
        lists[i]= graph[startNode][i];
    }

    for(let i=1; i<N-1; i++){
        startNode= getSmallNode(lists, visited);
        visited[startNode] =true;

        //다익스트라 메인 로직
        for(let i=1; i<lists.length; i++){
            if(graph[startNode][i]+ lists[startNode] < lists[i]) lists[i] = graph[startNode][i]+ lists[startNode];
        }   
    }
    return lists.filter(v=> v<=K).length;
}

//lists를 기준으로 방문하지 않은 최단 거리의 노드를 반환하는 함수
function getSmallNode(lists,visited){
    let minValue=Infinity;
    let node;

    for(let i=1; i<lists.length; i++){
        if(lists[i]< minValue && !(visited[i])){
            minValue= lists[i];
            node= i;
        }
    }  
    return node;
}