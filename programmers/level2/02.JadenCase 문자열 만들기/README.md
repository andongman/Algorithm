문제 푼 날짜 : 2021.9.13

<h2>문제 : JadenCase 문자열 만들기</h2>

<h3>내가 푼 방식</h3>
<div>1. 기존의 방식으로 문제를 해결했지만, 런타임 에러가 발생했다.</div>
<div>2. 1번 방식이 아닌 다른 방식으로 문제를 해결.</div>

<h3>알게 된 점</h3>
<div>1. s.split(" ").map(v => v[0].toUpperCase() + v.slice(1).toLowerCase()).join(" ");</div>
<div>2. s.split(" ").map(v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()).join(" ");</div>
<div>3. 1번은 런타임 에러이고, 2번은 테스트 케이스를 통과한다.</div>
<div>4. 1번 방식은 최신 브라우저에서만 지원하며, 기타 사례인 경우 undefined을 리턴한다. 2번 방식은 기타 사례인 경우 빈 문자열을 반환한다.</div>

<br>
https://programmers.co.kr/learn/courses/30/lessons/12951