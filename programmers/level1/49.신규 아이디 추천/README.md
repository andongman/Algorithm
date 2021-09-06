문제 푼 날짜 : 2021.9.5

<h2>문제 : 신규 아이디 추천</h2>

<h3>내가 푼 방식</h3>
<div>1. 정규표현식을 사용하지 않아서 문제 해결하는데 오래 걸렸다.</div>

<h3>깨달은 점</h3>
<div>1. JS에서 문자열은 immutable형이어서 특정 인덱스의 수정이 불가능하다.</div>
<div>2. ("0123456789abcdefghijklmnopqrstuvwxyz-_.".includes(val)) -> 많은 조건문을 간소화해주는 좋은 아이디어인 것 같다.</div>
<div>3. 정규표현식의 공부가 시급하다!!</div>

<br>
https://programmers.co.kr/learn/courses/30/lessons/72410