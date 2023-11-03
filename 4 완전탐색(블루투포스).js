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

/* 뒤집은 소수 */

// function isPrime(num) {
//   if (num === 1) return false;
//   for (let i = 2; i <= parseInt(Math.sqrt(num) /*sqrt 제곱근 */); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function solution(s) {
//   let answer = [];
//   /*   for (let x of s) {
//     let res = 0;
//     while (x) {
//       let t = x % 10;
//       res = res * 10 + t;
//       x = parseInt(x / 10);
//     }
//     if (isPrime(res)) answer.push(res);
//   } */
//   for (let x of s) {
//     let res = parseInt(x.toString().split("").reverse().join(""));
//     if (isPrime(res)) {
//       answer.push(res);
//     }
//   }

//   return answer;
// }
// console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));

//멘토링 블루투포스

/* function solution(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    //i=멘토,j=멘티
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0); //등수
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++; //멘토 멘티가 맞으면 cnt 추가
      }
      if (cnt === m) answer++; //시험 횟수 m이 모두 통과하면  answer++
    }
  }

  return answer;
}
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr)); */

//졸업 선물

/* function solution(s) {
  let answer;
  let m = 28;
  let n = s.length;
  s.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  console.log(s);
  for (let i = 0; i < n; i++) {
    let money = m - (s[i][0] / 2 + s[i][1]); //할인 상품 구매
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && s[j][0] + s[j][1] > money) break;
      if (j !== i && s[j][0] + s[j][1] <= money) {
        money -= s[j][0] + s[j][1];
        cnt++;
      }
    }
    answer = cnt;
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(arr)); */

//K번째 큰 수
