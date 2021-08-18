function solution(point, dish) {
    let count = 0;   //패스한 접시의 갯수

    while (true) {
        for (let i = 0; i < point.length; i++) {
            let min = Math.min.apply(null, point);

            if (point[i] === 1000) {
                continue;
            }

            if (point[i] === min && i === dish - 1) {
                return count;
            }

            if (min === point[i]) {
                point[i] = 1000;
            }
            count++;
        }
    }
}


//test
let point = [1, 1, 3, 2, 5];
let dish = 3;

//test
// let point = [5, 2, 3, 1, 2, 5];
// let dish = 1;


console.log(solution(point, dish));