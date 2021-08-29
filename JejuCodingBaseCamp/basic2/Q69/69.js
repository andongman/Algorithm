function solution(number) {
    if (number % 2 !== 0) {
        console.log("홀수입니다.");
        return;
    }

    let prime = [];
    let res = [];

    for (let i = 2; i < number - 1; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            prime.push(i);
        }
    }

    for (let value of prime) {
        if (prime.includes(number - value) && value < number - value) {
            res.push([value, number - value]);
        }
    }

    // 골드바흐 파티션의 모든 출력
    console.log("골드바흐 파티션의 모든 출력");
    res.map(v => console.log(v));

    // 골드바흐 차가 작은 순서대로 출력
    console.log("골드바흐 차가 작은 순서대로 출력");
    res.sort((a, b) => a[1] - a[0] > b[1] - b[0] ? 1 : -1).map(v => console.log(v));


    //골드바흐 차가 큰 순서대로 출력
    console.log("골드바흐 차가 큰 순서대로 출력");
    res.sort((a, b) => a[1] - a[0] > b[1] - b[0] ? -1 : 1).map(v => console.log(v));
}

solution(100);

