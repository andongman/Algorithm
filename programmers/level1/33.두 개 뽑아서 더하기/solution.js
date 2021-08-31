function solution(numbers) {
    var answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let value = numbers[i] + numbers[j];
            if (answer.includes(value)) continue;
            answer.push(value);
        }
    }
    return answer.sort((a, b) => a - b);
}
