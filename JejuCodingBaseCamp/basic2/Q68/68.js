function solution(timetable, input) {
    let res = [];

    input = input.split(":").map(v => Number(v));
    input = input[0] * 60 + input[1];

    timetable.map(time => res.push(checkTime(time, input)));

    return res;
}

function checkTime(time, input) {
    time = time.split(":").map(v => Number(v));
    time = time[0] * 60 + time[1];

    let left_time = time - input;

    if (left_time < 0) {
        return "지나갔습니다";
    }

    let left_hour = Math.floor(left_time / 60);
    let left_min = Math.floor(left_time % 60);

    // <내가 푼 방식>
    // left_hour = left_hour < 10 ? "0" + left_hour : left_hour;
    // left_min = left_min < 10 ? "0" + left_min : left_min;
    // return `${left_hour}시간 ${left_min}분`;


    //<더 나은 방식>
    return `${String(left_hour).padStart(2, 0)}시간 ${String(left_min).padStart(2, 0)}분`
}

const timetable = ["12:30", "13:20", "14:13"];
const input = "12:40";

console.log(solution(timetable, input));


