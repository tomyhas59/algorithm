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
let str = "BABABA";
function solution(s) {
  /*  let answer = "";
  for (let x of s) {
    if (x === "A") {
      answer += "#";
    } else answer += x;
  } */
  let answer = s;
  answer = answer.replace(/A/g, "#"); //정규식 표현 A를 찾아서 바꿔라 global의 g 써서 전체 바꿈, 없으면 한번 바꾸고 끝
  return answer;
}
console.log(solution(str));
