function solution(number) {
    let res = [];
    let count;

    for (let i = 1; ; i++) {
        count = number - (i - 1) * (i - 2) / 2;

        if (count < i) {
            res.push(count, i);
            break;
        }
    }

    console.log(res);
}

solution(59);

