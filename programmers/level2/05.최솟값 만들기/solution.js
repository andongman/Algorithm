function solution(A, B) {
    B = B.sort((a, b) => a - b);
    return A.sort((a, b) => b - a).reduce((acc, cur, i) => acc += cur * B[i], 0);
}

