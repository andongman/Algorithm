문제 푼 날짜 : 2021.9.14

<h2>문제 : 올바른 괄호</h2>

<h3>내가 푼 방식</h3>
<div>1. 간단한 로직이기에 풀이 생략.</div>

<h3>알게된 점</h3>
<div>1. s.split("").filter(v => v === ")").length * 2 !== s.length</div>
<div>2. s.match(/\(/g).length * 2 !== s.length</div>
<div>3. 2번으로 하였을 때, 런타임 에러가 뜬다. 정확한 이유를 알 수 없는 문제이다.</div>

<br>
https://programmers.co.kr/learn/courses/30/lessons/12909