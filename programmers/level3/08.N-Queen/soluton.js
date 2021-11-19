function solution(n) {
    let answer=0;

    function recursive(board, count){
        if(count===n){
            answer++;
            return;
        }

        for(let i=0; i< n; i++){            
            if(isValidate(board, count, i)){
                let replica=board.slice();
                replica.push([count, i]);
                recursive(replica, count+1);
            }   
        }
    }
    recursive([], 0);

    function isValidate(board, d_row, d_col){
        for(let i=0; i<board.length; i++){
            let [row, col]= board[i];

            if(col===d_col) return false;
            if((d_row-d_col)===(row-col)) return false;
            if((d_row+d_col)===(row+col)) return false;
        }
        return true;
    }
    
    return answer;
}