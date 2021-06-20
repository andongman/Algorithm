let s_names = "Yujin Hyewon";
let s_grades = "70 100";
let obj = {};

s_names.split(" ").forEach((name, index) => obj[name] = Number(s_grades.split(" ")[index]));

console.log(obj);