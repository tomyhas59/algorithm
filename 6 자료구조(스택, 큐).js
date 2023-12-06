//올바른 괄호(스택)

/* function solution(s) {
  let answer = "YES";
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop(s[i]);
    }
  }
  if (stack.length > 0) return "NO";

  return answer;
}
let arr = "(()()()()())";
console.log(solution(arr)); */

//괄호 문자 제거(스택)
function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      let index = answer.lastIndexOf("(");
      answer.splice(index);
    } else {
      answer.push(s[i]);
    }
  }
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === ")") {
  //     while (stack.pop() !== "(");
  //   } else stack.push(s[i]);
  // }
  answer = answer.join("");
  return answer;
}
let arr = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(arr));
