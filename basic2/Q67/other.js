function solution(number) {
    let temp = 0;
    let total;
    let people = 0;

    while (true) {
        total = Number((people) * (people - 1) / 2);

        if (number < total) {
            break;
        }

        temp = total;
        people += 1;
    }

    return console.log([Number(number - temp), people]);
}

solution(59);