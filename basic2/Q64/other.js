function solution(number) {
    let result = 0;

    while (true) {
        if (number % 7 === 0) {
            result += number / 7;
            console.log(result);
            break;
        }

        number -= 3;
        result += 1;

        if (number < 0) {
            console.log(-1);
            break;
        }
    }
}

solution(24);