function solution(n, k) {
  const number = n.toString(k);
  const array = number.split("0").map((v) => Number(v));
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 || array[i] === 1) {
      continue;
    }

    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(array[i]); j++) {
      if (!(array[i] % j)) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      result++;
    }
  }

  return result;
}

console.log(solution(437674, 3));
