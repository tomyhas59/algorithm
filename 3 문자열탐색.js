//회문 문자열
// function solution(s) {
//   let answer = "YES";
//   s = s.toUpperCase();
//   if (s.split("").reverse().join("") !== s) {
//     return "NO";
//   }
//   //reverse는 배열에서만 가능
//   /*  let n = s.length;
//   for (let i = 0; i < Math.floor(n / 2); i++) {
//     if (s[i] !== s[n - i - 1]) {
//       answer = "NO";
//     }
//   } */
//   return answer;
// }
// console.log(solution("goooB"));

//유효한 팰린드롬(회문) 정규식
/* function solution(s) {
  let answer = "YES";
  s = s.toUpperCase().replace(/[^A-Z]/g, ""); //A~Z가 아닌 것 제외
  console.log(s);
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}
let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str)); */

//숫자만 추출 isNaN
/* function solution(s) {
  let answer = "";
  for (let x of s) {
    if (!isNaN(x)) {
      answer += x;
    }
  }
  return parseInt(answer);
}
console.log(solution("g0en2T0s8eSoft")); */

//가장 짧은 문자 거리
/* function solution(s, t) {
  let answer = [];
  let p = 1000;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}
console.log(solution("teachermode", "e"));
 */

//문자열 압축 반복 문자 숫자로 표기
/* function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }

  return answer;
}
console.log(solution("KKHSSSSSSSE"));
 */
