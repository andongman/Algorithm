function solution(participant, completion) {
    for (let i = 0; i < participant.length; i++) {
        if (completion.includes(participant[i])) {
            if (participant.filter(v => v === participant[i]).length !== completion.filter(v => v === participant[i]).length) return participant[i];
        } else {
            return participant[i];
        }
    }
}


// best solution
// function solution(participant, completion) {
//     participant.sort()
//     completion.sort()

//     for(const i in completion){
//         if(participant[i] != completion[i])
//             return participant[i];
//     }

//     return participant[participant.length-1]
// }