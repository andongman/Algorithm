function solution(total, order) {
    let ary = new Array(total).fill(0).map((v, idx) => v = idx + 1);

    let count = 0;
    let idx = 0;
    let pass = 0;

    ary[idx] = -1;
    count++;

    while (count < total - 2) {
        idx++;
        pass++;

        //원형 테이블이기에, 배열의 길이 넘어가면 idx 초기화
        if (idx === ary.length) {
            idx = 0;
        }

        // -1은 이미 먹은 접시이기에 pass를 -1 감소시킨다.
        if (ary[idx] === -1) {
            pass--;
        }


        if (pass === order) {
            ary[idx] = -1;
            pass = 0;
            count++;
        }
    }

    return ary.filter(v => v !== -1);
}

console.log(solution(6, 3));