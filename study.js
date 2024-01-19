//가장 짧은 문자 거리
/* function solution(s, t) {
  let answer = [];
  let tArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) tArr.push(i);
  }

  for (let i = 0; i < s.length; i++) {
    let min = [];
    for (let j = 0; j < tArr.length; j++) {
      min.push(Math.abs(i - tArr[j]));
    }
    answer.push(Math.min(...min));
  }

  return answer;
}

let arr = "teachermode";
console.log(solution(arr, "e"));
 */
//문자열 압축 new Map 방법
/* 
function solution(arr) {
  let answer = "";
  let charCountMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (charCountMap.has(arr[i])) {
      charCountMap.set(arr[i], charCountMap.get(arr[i]) + 1);
    } else {
      charCountMap.set(arr[i], 1);
    }
  }

  charCountMap.forEach((value, key) => {
    answer += key + (value > 1 ? value : "");
  });

  return answer;
}

let arr = "KKHSSSSSSSE";

console.log(solution(arr));
 */

//자리수의 합
function solution(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum =
      Math.floor(x / 100) + Math.floor((x % 100) / 10) + Math.floor(x % 10);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (max === sum) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(arr));
