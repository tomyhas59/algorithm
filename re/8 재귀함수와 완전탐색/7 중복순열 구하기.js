/* 
중복순열 구하기
1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열
하는 방법을 모두 출력합니다.
 ▣입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
 ▣출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.
 ▣입력예제 1                                   
3 2
 ▣출력예제 1
 1 1
 1 2
 1 3
 2 1
 2 2
 2 3
 3 1
 3 2
 3 3
 9

*/

function solution(n, m) {
  let answer = [];
  let tmp = Array(m).fill(0);

  function DFS(L) {
    if (L === m) {
      answer.push([...tmp]);
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);

  return [answer, answer.length];
}

console.log(solution(3, 2));
