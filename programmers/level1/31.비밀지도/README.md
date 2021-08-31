문제 푼 날짜 : 2021.8.31

<h2>문제 : 비밀지도</h2>

<h3>내가 푼 방식</h3>
<div>1. arr1의 값을 2진수로 바꾸어 ary에 넣는다.</div>
<div>2. arr2의 값을 2진수로 바꾼 뒤, ary의 값과 비교하여 값을 갱신한다. 이로써 arr1 || arr2의 배열이 만들어진다.</div>
<div>3. ary의 값을 참조하여 #과 ' '으로 바꾸어 문제 해결.</div>

<h3>더 나은 방식</h3>
<div>1. 이 문제는 비트 연산자를 활용한 문제였다.</div>
<div>2. (arr1의 값 || arr2의 값)을 먼저 해결한 뒤 배열에 넣는다.</div>
<div>3. 배열의 값을 replace을 이용해 한번에 값을 교체한다.</div>

<h3>알게된 점</h3>
<div>1. dec.toString(2)     //10진수 -> 2진수</div>
<div>2. padStart(문자열의 길이, 넣고자 하는 문자)</div>
<div>3. replace(regexp) 을 잘 사용하자.</div>
<div>4. 10 | 2      // 합(|) 비트연산자</div>
<br>
https://programmers.co.kr/learn/courses/30/lessons/17681