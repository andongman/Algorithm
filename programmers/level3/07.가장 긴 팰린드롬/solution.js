function solution(s){
  let answer=1;

  for(let i=1; i<s.length-1; i++){
    let len= checkPalindrome(i-1, i+1, 1);
    if(answer< len) answer= len;
  }

  for(let i=0; i<s.length-1; i++){
    let len = checkPalindrome(i, i+1, 0);
    if(answer< len) answer= len;
  }
  
  function checkPalindrome(startIdx, lastIdx, count){
    if(startIdx < 0 || lastIdx > s.length-1) return count;
  
    if(s[startIdx]===s[lastIdx]){
      count+=2;
      return checkPalindrome(startIdx-1, lastIdx+1, count);
    }
    else return count;
  }

  return answer;
}