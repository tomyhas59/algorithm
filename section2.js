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
