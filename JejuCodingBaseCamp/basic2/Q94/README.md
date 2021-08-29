문제 푼 날짜 : 2021.8.23

<h2>문제 : 페이지 교체 - LRU 알고리즘</h2>

<h3>내가 푼 방식</h3>
<div>1. LRU 알고리즘이기에, 우선순위 배열을 사용하였다.</div> 
<div>2. 총 3가지 경우로 나누어 메모리 실행시간을 계산하고, 우선순위 배열을 계속 갱신하여 문제해결.</div>


<h3>다른 방식</h3>
<div>1. 메모리 변화가 상관없다면, Q93번 풀이> if(memory.includes(i))문 안에 memory.splice(memory.indexOf(i),1)를 집어넣으면 된다.</div>

<h4>깨달은 점</h4>
<div>map() 메서드는 특정 하나의 값을 return할 수 없다.</div>
<div>Array.filter() 메서드는  Array의 값을 filter하는 것이다. 당연한 말이지만, 그렇기에 return 값도 Array의 값중에 하나이다.</div>