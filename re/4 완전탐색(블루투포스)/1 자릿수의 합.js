/* 
자릿수의 합
N
개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고 그 합이 최대인 자연수를 출력
,
하는 프로그램을 작성하세요 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다
.
 235
 1234
만약 와 가동시에답이될수있다면 를답으로출력해야합니다
▣ 입력설명
첫 줄에 자연수의 개수
각 자연수의 크기는
N(3<=N<=100)
 10,000,000
이 주어지고 그 다음 줄에 개의 자연수가 주어진다
를 넘지 않는다
▣ 출력설명
자릿수의 합이 최대인 자연수를 출력한다.
 ▣ 입력예제 1
 7
 128 460 603 40 521 137 123
 ▣ 출력예제 1
 137
  */

function solution(arr) {
  let numbers = arr.map((v) =>
    v
      .toString()
      .split("")
      .reduce((a, b) => Number(a) + Number(b))
  );

  let max = Math.max(...numbers);

  const indices = numbers.reduce((acc, value, index) => {
    if (value === max) acc.push(index);
    return acc;
  }, []);

  let maxes = indices.map((v) => arr[v]);

  return Math.max(...maxes);
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
