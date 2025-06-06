/* 
A씨는 두 개의 버전을 비교하는 프로그램을 작성해야 한다.

버전은 다음처럼 "." 으로 구분된 문자열이다.

버전 예) 1.0.0, 1.0.23, 1.1

두 개의 버전을 비교하는 프로그램을 작성하시오.

다음은 버전 비교의 예이다.

0.0.2 > 0.0.1
1.0.10 > 1.0.3
1.2.0 > 1.1.99
1.1 > 1.0.1

*/

function solution(a, b) {
  const arrA = a.split(".").map(Number);
  const arrB = b.split(".").map(Number);

  const maxLength = Math.max(arrA.length, arrB.length);

  for (let i = 0; i < maxLength; i++) {
    const numA = arrA[i] || 0;
    const numB = arrB[i] || 0;

    if (numA > numB) return `${a} > ${b}`;
    if (numA < numB) return `${b} > ${a}`;
  }

  return "같음"; // 두 버전이 완전히 같으면 a 반환
}

console.log(solution("1.2.0", "1.1.99"));
