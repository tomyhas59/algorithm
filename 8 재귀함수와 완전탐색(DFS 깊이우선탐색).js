//재귀함수 DFS 깊이 우선 탐색
//스택 프레임[복귀주소, 지역변수, 매개변수]
/* function solution(n) {
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

 */

//이진수 출력(재귀)
/* function solution(n) {
  let answer = "";

  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(Math.floor(L / 2));
      answer += L % 2;
    }
  }
  DFS(n);
  //    let answer = "";
  // let quotient = n;
  // let divide;
  // while (quotient !== 0) {
  //   quotient = Math.floor(n / 2);
  //   divide = n % 2;
  //   answer += divide;
  //   n = quotient;
  // }
  // answer = answer.split("").reverse().join("");
  return answer;
}

console.log(solution(11)); */

//이진트리순회(깊이 우선 탐색)

/* function solution(v) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v; //전위순회
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}
console.log(solution(1)); */

//부분집합 구하기(이진트리DFS)
function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
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
