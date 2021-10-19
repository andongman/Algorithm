문제 푼 날짜 : 2021.10.19

<h2>문제 : 타겟 넘버</h2>

<h3>내가 푼 방식</h3>
<div>1. bfs 방식을 사용하여 접근하였더니, 시간초과가 발생하였다.</div>
<div>2. 1번의 문제점은 queue의 길이만큼 for문을 돌고, 해당 for문에서 큐의 값을 빼는 과정(shift)에서 시간초과가 발생하였다.</div>
<div>3. 최소한의 연산을 진행하기 위해 재귀식을 사용하여 문제를 해결하였다.</div>

<h3>알게된 점</h3>
<div>1. 해당 문제를 bfs로 풀었을 때, queue의 길이만큼 shift하는 과정이 시간이 많이 소요된다.</div>
<div>2. shift, unshift는 효율성이 좋지 않다!!</div>

<br>
https://programmers.co.kr/learn/courses/30/lessons/43165
