/* 
부분집합 구하기(DFS)
자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램
을 작성하세요. 
▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.
 ▣ 출력설명
첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다. 
단 공집합은 출력하지 않습니다.
 ▣ 입력예제 1                                   
3
 ▣ 출력예제 1
 1 2 3
 1 2
 1 3
 1
 2 3
 2
 3
*/

function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let nums = "";
      ch.forEach((v, i) => {
        if (v === 1) nums += i;
      });
      if (nums.length > 0) answer.push(nums);
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);

  return answer;
}

console.log(solution(3));
