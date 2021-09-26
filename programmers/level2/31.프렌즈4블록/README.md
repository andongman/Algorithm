문제 푼 날짜 : 2021.9.26

<h2>문제 : 프렌즈4블록</h2>

<h3>내가 푼 방식</h3>
<div>1. board를 변형한 replica 배열을 생성한다.</div>
<div>2. replica 배열을 순회하면서, 해당 위치의 값(v)의 arrow, left, top의 값을 비교하면서 모두 일치하는 경우 removeAry(slice할 인덱스 배열)에 집어 넣는다.</div>
<div>3. removeAry의 size가 0이면 더 이상 2*2의 블록이 존재하지 않기에 삭제한 블록의 갯수를 반환하면서 문제 해결.</div>

<br>
https://programmers.co.kr/learn/courses/30/lessons/17679