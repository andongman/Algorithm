let month = Math.floor((Math.random() * 12) + 1);
let day = Math.floor((Math.random() * 31) + 1);

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const solution = (month, day) => {
    const date = new Date(`2020-${month}-${day}`);
    console.log(`2020년 ${month}월 ${day}일은 ${days[date.getDay()]}입니다.`);
}

solution(month, day);