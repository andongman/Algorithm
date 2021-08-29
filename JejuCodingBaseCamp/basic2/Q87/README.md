문제 푼 날짜 : 2021.8.18

<h2>문제 : 천하제일 먹기 대회</h2>

<h3>내가 푼 방식</h3>
<div>1. 이름(key)과 먹은 접시(value)로 구성된 객체를 만든다.</div>
<div>2. 객체를 배열로 바꾼 뒤, 내림차순 정렬과 map()을 사용해 value값을 바꿔서 해결.</div>

<h4>새로 배운 점</h4>
let temp = [{ name :"", value :""}, { name :"", value :""} ,...];
let result = {};
for (let i of temp) { result[i['name']] = i['value']; }
<div>result[i['name']] 와 같이 사용할 수 있다.</div>