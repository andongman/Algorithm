function solution(s) {
    const obj = { "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9 };
    let answer = "";
    let str = "";

    for (let v of s.split("")) {
        if (v.charCodeAt(0) >= 48 && v.charCodeAt(0) <= 57) answer += v;
        else {
            str += v;
            if (Object.keys(obj).includes(str)) {
                answer += obj[str];
                str = "";
            }
        }
    }
    return parseInt(answer);
}

// best solution
// for(let [key, value] of Object.entries(charSet)) {
//     let re = new RegExp(`${key}`,"g");
//     s = s.replace(re, value);
// }


// good idea solution
// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for(let i=0; i< numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }

//     return Number(answer);
// }