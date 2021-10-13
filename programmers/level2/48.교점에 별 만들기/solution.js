function solution(line){   
    let meet =[];
    let count=0;

    while(count<line.length){
        let [a,b,e]= line[count];

        for(let i=count+1 ; i<line.length; i++){
            let [c,d,f] =line[i];

            let numerator= (a*d)-(b*c);
            let x_denominator= (b*f)-(e*d);
            let y_denominator= (e*c)-(a*f);

            if(x_denominator%numerator !==0 || y_denominator%numerator !==0) continue;
            
            let xpos= x_denominator/numerator;
            let ypos= y_denominator/numerator;

            meet.push([xpos,ypos]);
        }
        count++;
    }
    
    let x_meet= meet.map(v=> v[0]);
    let y_meet= meet.map(v=> v[1]);
    
    let xMax= Math.max(...x_meet);
    let xMin= Math.min(...x_meet);
    let yMax= Math.max(...y_meet);
    let yMin= Math.min(...y_meet);

    let meetAry= meet.map(v=> v.join(","));
    let result=[];
    
    for(let i=yMax; i>=yMin; i--){
        let str="";
        for(let j=xMin; j<=xMax; j++){
            if(meetAry.includes([j,i].join(","))) str+="*";
            else str+=".";
        }
        result.push(str);
    }
    return result;
}