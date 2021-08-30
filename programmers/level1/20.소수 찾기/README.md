문제 푼 날짜 : 2021.8.30

<h2>문제 : 소수 찾기</h2>

<h3>내가 푼 방식</h3>
<div>1. for(i: 2 ~ n), for(j: i ~ Math.sqrt(i))로 풀었을 경우에 효율성 측면에서 불합격 하였다.</div>
<div>1. for(i: 2 ~ n), for(j: i*2 ~ n) 이 두가지 반복문을 사용했고, 두번째 반복문에서 i만큼 증가시키면서 해당 배열의 값을 0으로 초기화시켜 문제 해결.</div>

<br>
https://programmers.co.kr/learn/courses/30/lessons/12921