문제 푼 날짜 : 2021.9.14

<h2>문제 : 다음 큰 숫자</h2>

<h3>내가 푼 방식</h3>
<div>1. 간단한 로직이기에 풀이 생략.</div>

<h3>알게된 점</h3>
<div>1. String.match()에 익숙해지자!</div>
<div>2. n.toString(2).split("").filter(v => v === "1").length</div>
<div>3. n.toString(2).match(/1/g).length</div>
<div>4. 2번과 3번은 같은 코드이지만, 가독성이 더 좋은 3번에도 익숙해지자</div>

<br>
https://programmers.co.kr/learn/courses/30/lessons/12911