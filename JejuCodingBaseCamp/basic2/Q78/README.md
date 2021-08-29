문제 푼 날짜 : 2021.8.7

<h2>문제 : 원형 테이블</h2>

<h3>내가 푼 방식</h3>
<div>1. ary 배열을 1 ~ total 까지 초기화 한다.</div>
<div>2. 먹은 음식(idx)에 한해서는 ary[idx] = -1로 값을 바꾸며 count를 1 증가시킨다.</div>
<div>3. count가 (총 접시 갯수-2)와 같을 때, while 반복문 탈출하고 ary배열에서 -1이 아닌 값을 도출하며 해결.</div>


<h3>더 나은 방식</h3>
<div>1. ary 배열을 1 ~ total 까지 초기화 한다.</div>
<div>2. 먹은 음식(idx)에 한해서는, ary.splice(idx,1)로 해당 값을 삭제한다.</div>
<div>3. ary 배열의 길이가 2가 될 때, while 반복문 탈출하고 ary배열 반환하며 해결.</div>


<h3>유용한 문법</h3>
<div>new Array(n).fill(0)을 사용하며, 0으로 채워진 길이가 n인 배열이 생성된다.</div>
<div>splice()을 잘 사용하자.</div>
<div>array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
</div>
