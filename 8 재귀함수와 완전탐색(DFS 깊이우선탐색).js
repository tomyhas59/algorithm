//재귀함수
//스택 프레임[복귀주소, 지역변수, 매개변수]
function solution(n) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

solution(3);
