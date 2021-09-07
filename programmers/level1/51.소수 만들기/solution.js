function solution(nums) {
    let ary = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                ary.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    let answer = [];

    for (let v of ary) {
        let isPrime = true;

        for (let i = 2; i < parseInt(v); i++) {
            if (!(parseInt(v) % i)) {
                isPrime = false;
                break;
            }
        }
        isPrime && answer.push(v);
    }
    return answer.length;
}