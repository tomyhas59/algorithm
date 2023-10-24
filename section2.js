//1, 2차원 배열 탐색

// 큰 수 출력하기
/* function solution(s) {
  let answer = [];
  answer.push(num[0]);
  for (let i = 1; i < s.length; i++) {
    if (num[i] > num[i - 1]) {
      answer.push(num[i]);
    }
  }
  return answer;
}
let num = [7, 3, 9, 5, 6, 12];
console.log(solution(num)); */

//보이는 학생
/* function solution(s) {
  let answer = 1;
  let max = 130;
  for (let i = 1; i < s.length; i++) {
    if (s[i] > max) {
      max = s[i];
      answer++;
    }
  }
  return answer;
}
let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr)); */

//가위바위보
/* function solution(A, B) {
  let answer = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] - B[i] === 0) {
      answer.push("D");
    } else if (A[i] === 1 && B[i] === 3) answer.push("A");
    else if (A[i] === 2 && B[i] === 1) answer.push("A");
    else if (A[i] === 3 && B[i] === 2) answer.push("A");
    else answer.push("B");
  }
  return answer;
}
let A = [1, 3, 3, 1, 3];
let B = [3, 1, 2, 2, 3];
console.log(solution(A, B)); */

//점수 계산
function solution(s) {
  let answer = 0,
    cnt = 0;
  for (let x of s) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
