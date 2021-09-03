function solution(lottos, win_nums) {
    let secret = lottos.filter(v => v === 0).length;
    let count = 0;

    lottos.filter(v => v !== 0).forEach(v => {
        if (win_nums.includes(v)) count++;
    });

    let maxCount = (count + secret > 6) ? 6 : ((count + secret < 2) ? 1 : count + secret);
    let minCount = (count > 6) ? 6 : ((count < 2) ? 1 : count);

    return [7 - maxCount, 7 - minCount];
}