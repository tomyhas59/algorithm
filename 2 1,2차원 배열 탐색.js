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

//점수 계산 연속으로 맞히면 점수 더 줌
/* function solution(s) {
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
 */

//등수 구하기 Array.from({ length: n }, () => 1);
/* function solution(s) {
  let n = s.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (s[j] > s[i]) answer[i]++;
    }
  }
  return answer;
}
let arr = [87, 89, 92, 100, 76];
console.log(solution(arr)); */

//격자판 최대합
/* function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0,
    sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}
let arr = [
  [110, 13, 10, 16, 16],
  [112, 14, 74, 615, 61],
  [13, 67, 547, 12, 12],
  [14, 63, 15, 24, 34],
  [15, 13, 86, 12, 11],
];
console.log(solution(arr));
 */

//봉우리
/* function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) {
        answer++;
      }
    }
  }
  return answer;
}
let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
 */
