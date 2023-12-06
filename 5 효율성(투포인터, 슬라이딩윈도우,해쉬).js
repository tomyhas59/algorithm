//두 배열 합치기 투포인터
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
/* function solution(s) {
  let answer = "";
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1); //get(x): Map의 value값 반환
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
 */

//아나그램(해쉬)

/* function solution(arr1, arr2) {
  let answer = "YES";
  let sH = new Map(); //[{A, 2},{b, 1},{a, 1},{e, 2},{C ,1}]

  for (let x of arr1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1); //get(x): Map의 value값 반환
    else sH.set(x, 1);
  }
  for (let x of arr2) {
    if (!sH.has(x) || sH.get(x) === 0) {
      answer = "NO";
    }
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}
let arr1 = "AbaAeCeDE";
let arr2 = "baeeACAED";
console.log(solution(arr1, arr2));
 */

//모든 아나그램 찾기

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;

  //초기 윈도우 설정
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;

  //슬라이딩 윈도우
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    //두 맵 비교
    if (compareMaps(sH, tH)) answer++;

    //lt 위치값 감소, 0이 되면 맵에서 제거
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    //다음 윈도우로 이동
    lt++;
  }
  return answer;
}
let arr1 = "bacaAacba";
let arr2 = "abc";
console.log(solution(arr1, arr2));
