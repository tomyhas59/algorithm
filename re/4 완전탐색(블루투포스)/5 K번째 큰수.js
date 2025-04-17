/* 
 K
번째 큰 수
1
 100
 N
현수는 부터 사이의 자연수가 적힌 장의 카드를 가지고 있습니다 같은 숫자의 카드가
.
여러장 있을 수 있습니다 현수는 이 중 장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려
.
 . 3
 3
고 합니다 장을뽑을수있는모든경우를 기록합니다 기록한 값 중 번째로 큰 수를 출력
하는 프로그램을 작성하세요.
만약 큰 수부터 만들어진 수가
.
 25 25 23 23 22 20 19......
 K
 K
 3
이고 값이 이라면 번째큰 값
22
은 입니다
.
 ▣ 입력설명
첫 줄에 자연수
N(3<=N<=100) K(1<=K<=50)
과
,
 K
입력되고 그 다음 줄에 개의 카드값이 입력
N
된다.
 K
 ▣ 출력설명
첫 줄에 번째수를출력합니다 번째수가존재하지않으면 를출력합니다
. K
 ▣ 입력예제 1
 10 3
 13 15 34 23 45 65 33 11 26 42
 ▣ 출력예제 1
 143
*/

function solution(cards, n) {
  let set = new Set();

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        set.add(cards[i] + cards[j] + cards[k]);
      }
    }
  }

  const sortedArray = [...set].sort((a, b) => b - a);

  return sortedArray[n - 1] !== undefined ? sortedArray[n - 1] : -1;
}

console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3));
