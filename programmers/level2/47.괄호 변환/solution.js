function solution(w){
    if(w==='') return w;   
        
    let l_bracket=0;
    let r_bracket=0;
    let u="";
    let v="";

    for(let i in w){
        if(w[i]==="(") l_bracket++;
        else r_bracket++;
            
        u+=w[i];

        if(l_bracket===r_bracket){
            v= w.slice(Number(i)+1);
            break;
        }
    }
    let stack=[];
    let check =false;

    for(let i in u){
        if(u[i]==="(") stack.push(u[i]);
        else if(stack[stack.length-1]!=="("){
            check=true;
            break;
        }else stack.pop();
    }

    if(check)return '('+solution(v)+')'+u.slice(1,u.length-1).split("").map(v=> v==="(" ? ")":"(").join("");
    else return u+solution(v);
}