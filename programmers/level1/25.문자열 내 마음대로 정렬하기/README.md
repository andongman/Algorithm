문제 푼 날짜 : 2021.8.30

<h2>문제 : 문자열 내 마음대로 정렬하기</h2>

<h3>내가 푼 방식</h3>
<div>1. sort()로 사전식 정렬을 한 뒤, sort()를 인덱스 n 기준으로 정렬하여 문제 해결.</div>

<h3>알게된 점</h3>
<div>1. var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];</div>
<div>2. items.sort((a, b) => a.localeCompare(b)); // ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']</div>
<br>
https://programmers.co.kr/learn/courses/30/lessons/12915

