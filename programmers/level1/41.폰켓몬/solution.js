function solution(nums) {
    let ary = Array.from(new Set(nums));
    return nums.length / 2 > ary.length ? ary.length : nums.length / 2;
}