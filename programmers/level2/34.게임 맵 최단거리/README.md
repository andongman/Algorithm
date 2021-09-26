문제 푼 날짜 : 2021.9.27

<h2>문제 : 게임 맵 최단거리</h2>

<h3>내가 푼 방식</h3>
<div>1. BFS를 사용하여 문제를 해결하였다.</div>
<div>2. queue에서 값을 하나 꺼낸다.</div>
<div>3. 2번에서 꺼낸 값의 상하좌우의 값이 1일 경우, queue에 (xIdx, yIdx, count(현재 이동거리)) 값을 집어넣고 해당 인덱스를 0으로 초기화하였다.</div>
<div>4. 2번과 3번을 반복하면서, queue에서 꺼낸 값(xIdx, yIdx, count)이 맵에서 가고자 하는 인덱스와 동일하면 count의 값을 저장한다.</div>
<div>5. queue의 길이가 0일때 반복문을 탈출하고, 가장 작은 count의 값을 반환하면서 문제 해결.</div>

<br>
https://programmers.co.kr/learn/courses/30/lessons/1844