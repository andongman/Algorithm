// 기존의 방식
// function solution(people, limit) {
//     let answer = 0;
//     people.sort((a, b) => a - b);

//     while (people.length) {
//         let min = people[0];
//         let max = people[people.length - 1];

//         if (max <= limit / 2) {
//             answer += Math.ceil(people.length / 2);
//             break;
//         }
//         if (min + max <= limit) people.splice(0, 1);

//         people.splice(people.length - 1, 1);
//         answer++;
//     }
//     return answer;
// }

function solution(people, limit) {
    let answer = 0;
    let minIdx = 0;
    let maxIdx = people.length - 1;
    people.sort((a, b) => a - b);

    while (minIdx <= maxIdx) {
        let min = people[minIdx];
        let max = people[maxIdx];

        if (max <= limit / 2) {
            answer += Math.ceil((maxIdx - minIdx + 1) / 2);
            break;
        }
        if (min + max <= limit) minIdx++;

        maxIdx--;
        answer++;
    }
    return answer;
}
