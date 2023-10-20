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
