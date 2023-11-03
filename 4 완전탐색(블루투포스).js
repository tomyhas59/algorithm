//자리수의 합
/* function solution(s) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  //------------------------------------------------------------
  //   for (let x of s) {
  //     let sum = 0,
  //       tmp = x;
  //     while (tmp) {
  //       sum += tmp % 10;
  //       tmp = Math.floor(tmp / 10);
  //     }
  //     if (sum > max) {
  //       max = sum;
  //       answer = x;
  //     } else if (sun === max) {
  //       if (x > answer) answer = x;
  //     }
  //   }
  //------------------------------------------------------------
  for (let i = 0; i < s.length; i++) {
    let sum = String(s[i])
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = s[i];
    } else if (max === sum) if (s[i] > answer) answer = s[i];
  }
  return answer;
}
console.log(solution([128, 460, 603, 40, 521, 137, 123])); */

//뒤집은 소수
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num) /*sqrt 제곱근 */); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(s) {
  let answer = [];
  /*   for (let x of s) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  } */
  for (let x of s) {
    let res = parseInt(x.toString().split("").reverse().join(""));
    if (isPrime(res)) {
      answer.push(res);
    }
  }

  return answer;
}
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
