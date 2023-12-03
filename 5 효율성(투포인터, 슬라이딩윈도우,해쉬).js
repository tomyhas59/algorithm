//두 배열 합치기
/* function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}
let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b)); */

//공통원소 구하기
/* function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let n = arr1.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < n) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (arr1[i] === arr2[j]) {
  //       answer.push(arr1[i]);
  //     }
  //   }
  //   answer.sort((a, b) => a - b);
  // }
  return answer;
}
let arr1 = [1, 3, 9, 5, 2];
let arr2 = [3, 2, 5, 7, 8];
console.log(solution(arr1, arr2));
 */

// 연속 분수 수열

/* function solution(s) {
  let answer = 0;
  let sum = 0;
  let p1 = (p2 = 0);

  while (p2 < s.length) {
    sum += s[p2++];
    while (sum > 6) sum -= s[p1++];
    if (sum === 6) answer++;
  }

  // for (let i = 0; i < s.length; i++) {
  //   let sum = 0;
  //   for (let j = i; j < s.length; j++) {
  //     sum = sum + s[j];
  //     if (sum === 6) {
  //       answer++;
  //     }
  //     if (sum > 6) {
  //       break;
  //     }
  //   }
  // }

  return answer;
}
let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(arr)); */

//연속 부분 수열 2
/* 
function solution(s) {
  let answer = 0;
  let sum = 0;
  let p1 = 0;

  for (let i = 0; i < s.length; i++) {
    sum += arr[i];
    while (sum > 5) {
      sum -= arr[p1++];
    }
    answer += i - p1 + 1;
  }
  // for (let i = 0; i < s.length; i++) {
  //   let sum = 0;
  //   for (let j = i; j < s.length; j++) {
  //     sum = sum + s[j];
  //     if (sum <= 5) {
  //       answer++;
  //     }
  //     if (sum > 5) {
  //       break;
  //     }
  //   }
  // }

  return answer;
}
let arr = [1, 3, 1, 2, 3];
console.log(solution(arr)); */

//최대 매출 Sliding Window
/* function solution(s) {
  let answer = "";
  let k = 3;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += s[i];
  answer = sum;
  for (let i = k; i < s.length; i++) {
    sum = sum + s[i] - s[i - k];
    answer = Math.max(answer, sum);
  }
  // let maxSum = [];
  // for (let i = 0; i < s.length - 2; i++) {
  //   let sum = 0;
  //   for (let j = i; j < i + k; j++) {
  //     sum += s[j];
  //   }
  //   maxSum.push(sum);
  // }
  // answer = Math.max(...maxSum);
  return answer;
}
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(arr)); */

//학급 회장 Hash Map
function solution(s) {
  let answer = "";
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}
let arr = Array.from("BACBACCACCBDEDE");
console.log(solution(arr));
