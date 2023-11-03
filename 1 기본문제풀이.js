// 세 수 중 최솟값
/* function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
console.log(solution(6, 7, 11));  //6
} */

// 삼각형 판별하기
/* function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (sum - max <= max) answer = "NO";
  return answer;
}
console.log(solution(110, 23, 35)); //NO */

//연필 개수 올림 ceil, 반올림 round
/* function solution(n) {
  let answer = Math.ceil(a / 12);
  return answer;
}
console.log(solution(178));
 */

//1부터 N까지 합 출력
/* function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }
  return answer;
}
console.log(solution(10));
 */

//최솟값 구하기 min
/* function solution() {
  let arr = [];
  for (let i = 0; i < 7; i++) {
    let number = Math.floor(Math.random() * 100);
    arr.push(number);
  }
  let answer = Math.min(...arr); //스프레드는 배열 요소 직접 연결
  console.log(arr, answer);
  return answer;
}
solution(); */

//홀수
/* function solution() {
  let arr = [];
  for (let i = 0; i < 7; i++) {
    let number = Math.floor(Math.random() * 100);
    arr.push(number);
  }
  let sum = 0;
  let odd = [];
  for (let i = 0; i < 7; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
      odd.push(arr[i]);
    }
  }
  let min = Math.min(...odd);
  console.log(sum, min);
}
solution(); */

//10부제 일의 자리수 구하기 %
/* function solution() {
  let day = 3;
  let carNumber = [25, 23, 11, 47, 53, 17, 33];
  let answer = 0;
  for (let j = 0; j < 7; j++) {
    if (day === carNumber[j] % 10) {
      answer += 1;
    }
  }
  return console.log(answer);
}
solution();
 */

//일곱 난쟁이
/* let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
function solution(arr) {
  let answer = arr;
  let sum = 0;
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1); //앞의 거 지우면 당겨지니 뒤부터 지움
        arr.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag === 1) break;
  }
  return answer;
}
console.log(solution(arr)); */

//A를 #으로

// let str = "BABABA";
// function solution(s) {
//   /*  let answer = "";
//   for (let x of s) {
//     if (x === "A") {
//       answer += "#";
//     } else answer += x;
//   } */
//   let answer = s;
//   //정규식 표현 A를 찾아서 바꿔라 global의 g 써서 전체 바꿈, 없으면 한번 바꾸고 끝
//   answer = answer.replace(/A/g, "#");
//   return answer;
// }
// console.log(solution(str));

/* 문자 찾기 */
/* function solution(s) {
  let answer = str.split(s).length - 1;
  //R을 기준으로 구분하여 보여줌[ 'COMPUTE', 'P', 'OG', 'AMMING' ]

  // let answer = 0;
  // for (let x of str) {
  //   if (x === s) {
  //     answer += 1;
  //   }
  // }
  return answer;
}
let str = "COMPUTERPROGRAMMING";
console.log(solution("R"));
 */

/* 대문자 찾기 toUpperCase*/
/* function solution(s) {
  let answer = 0;
  for (let x of s) {
    //let num=x.charCodeAt();
    //if(num>=65 && num<=90)answer++;
    //대문자 아스키 넘버 65~90, 소문자 97~122
    if (x === x.toUpperCase()) {
      answer += 1;
    }
  }
  return answer;
}
let str = "KoreaTimeGood";
console.log(solution(str)); */

//대문자로 통일
/* function solution(s) {
  let answer = s.toUpperCase();

  return answer;
}
let str = "ItisTimeToStudy";
console.log(solution(str)); */

//대소문자 변환 toLowerCase
/* function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) {
      answer += x.toLowerCase();
    } else if (x === x.toLowerCase()) {
      answer += x.toUpperCase();
    }
  }
  return answer;
}
console.log(solution("StuDY")); */

//가장 긴 문자열
/* function solution(s) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
 */

//가운데 문자 출력
/* function solution(s) {
  let answer;
  let x = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    answer = s[x - 1] + s[x];
  } else answer = s[x];
  return answer;
}
console.log(solution("study"));
 */

//중복 문자 제거 indexOf
/* function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer += s[i];
    }
  }
  return answer;
}
console.log(solution("ksekkset")); */

//중복 문자 개수 찾기
/* function solution(s) {
  let answer = 0;
  let position = s.indexOf("k");
  while (position !== -1) {
    answer++;
    position = s.indexOf("k", position + 1);
  }
  return answer;
}
console.log(solution("ksekkset"));
 */

//중복 단어 제거
/* function solution(s) {
  let answer;
  answer = s.filter((v, i) => {
    return s.indexOf(v) === i;
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];

console.log(solution(str)); */
