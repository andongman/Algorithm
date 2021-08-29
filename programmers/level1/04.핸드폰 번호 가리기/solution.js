function solution(phone_number) {
    return ''.padStart(phone_number.length - 4, '*')
        .concat(phone_number.slice(phone_number.length - 4));
}
