문제 푼 날짜 : 2021.8.21

<h2>문제 : 같은 의약 성분을 찾아라</h2>

<h3>내가 푼 방식</h3>
<div>1. sample 배열을 순회하면서, 기존 의약과 동일한 성분의 갯수를 구하여 문제 해결.</div>

<h3>다른 방식</h3>
<div>1. 성분이 중복되지 않는 sample 100개를 만든다.</div>
<div>2. sample 배열을 순회하면서, 값을 new Set()을 사용하여 Set자료형을 변환하고, 기존 의약과 동일한 성분을 filter한다. </div>
<div>3. filter한 Set 자료형의 size를 이용하여 문제해결.</div>

<h4>알게된 점</h4>
<div>1. String.fromCharCode()는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환.</div>
<div>2. let a='abc';</div>
<div>3. console.log(new Set(a));        //{"a","b","c"}</div>
<div>4. 문자열이 포함되어 있는지 확인하는 함수  : includes(Array) , has(Set)</div>
<div>5. a.size      //3</div>
