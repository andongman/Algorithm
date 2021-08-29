문제 푼 날짜 : 2021.8.1

<h2>문제 : 최단 경로 찾기</h2>

<h3>내가 푼 방식</h3>
<div>1. 최단 경로의 길이 도출이기에 BFS의 방법을 사용하였다.</div>
<div>2. queue에 startNode를 집어넣는다.</div>
<div>3. queue의 길이만큼 for문을 수행한다. </div>
<div>4. queue의 제일 앞에 있는 값을 꺼내서 visited 배열에 집어넣고 queue에서 꺼낸 값의 자식을 queue에 집어넣는다. </div>
<div>5. (3,4번)을 반복 실행한다. 반복 실행하면서 queue에서 꺼낸 값이 endNode와 일치하면 프로그램 종료되고, queue의 길이가 0이 된다면 startNode와 endNode가 이어진 경로가 없기에 안내문구를 출력한다.</div>

 