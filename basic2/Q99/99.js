function solution(stoneDurability, rabbitJump) {
    let res = [];

    rabbitJump.map((rval) => {
        //토끼의 위치
        let pos = -1;

        for (let sval of stoneDurability) {
            pos += rval;

            // 돌의 내구도 길이를 벗어날 때
            if (pos >= stoneDurability.length) {
                res.push("pass");
                break;
            }

            //돌의 내구도가 약해 더 이상 버티지 못할 때
            if (stoneDurability[pos] === 0) {
                res.push("fail");
                break;
            }

            stoneDurability[pos]--;

            //토끼가 가장 마지막 돌에 점프한 경우
            if (pos === stoneDurability.length - 1) {
                res.push("pass");
                break;
            }
        }
    })

    return res;
}

//test
let stoneDurability = [1, 2, 1, 4];
let rabbitJump = [2, 1];

//test
// let stoneDurability = [1, 2, 1, 4, 5, 2];
// let rabbitJump = [2, 1, 3, 1];

console.log(solution(stoneDurability, rabbitJump));