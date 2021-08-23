문제 푼 날짜 : 2021.8.22

<h2>문제 : 키보드 고장</h2>

<h3>내가 푼 방식</h3>
<div>1. 임의의 100명 월급 리스트를 만든다.</div>
<div>2. 월급 리스트를 순회하면서, 월급에 3,4,6이 포함되어 있으면 두 번의 월급으로 알맞게 나누어 문제 해결.</div>

<h3>알게 된 점</h3>
<div>반복 가능한 객체를 iterable이라 부른다.</div>

<h4>iterable 객체를 만들어내는 생성자</h4>
<li>String</li>
<li>Array</li>
<li>TypedArray</li>
<li>Map</li>
<li>Set</li> 

<h4>iterable의 사용</h4>
<li>for...of 루프</li>
<li>spread 연산자 (...)</li>
<li>분해대입(destructuring assignment)</li>
<li>기타 iterable을 인수로 받는 함수 ex : Array.from</li>

<h4>원시타입과 참조타입</h4>
<div>원시타입 : string, number, boolean, null, undefined</div>
<div>참조타입 : 객체, 배열, 함수...</div>
<div>원시타입은 메모리에 값을 그대로 저장하고, 참조타입은 메모리에 값을 주소로 저장한다.</div>

<h4>문자열과 문자열 객체</h4>//공통 값이 없고 메모리가 비어있는 경우
<div>let str1 = '문자열';</div>
<div>let str2 = new String('문자열');</div>