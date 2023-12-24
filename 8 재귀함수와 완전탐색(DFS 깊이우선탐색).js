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
/* function solution(n) {
/* function solution(n) {
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
 */

//합이 같은 부분집합(이진트리 DFS)
/* function solution(n, arr) {
  let answer = "NO",
    flag = 0;
  let total = arr.reduce((a, c) => a + c, 0);

  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}
let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(6, arr));
 */

//바둑이 승차(DFS)
/* function solution(n, arr) {
  let answer;
  let sumArr = [];
  function DFS(L, sum) {
    if (L === arr.length) {
      if (sum < n) sumArr.push(sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);

  answer = Math.max(...sumArr);
  return answer;
}
let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr)); */

//최대점수 구하기(이진트리 DFS)
/* function solution(n, arr) {
  let answer;
  let sumArr = [];
  function DFS(L, sum, time) {
    if (L === arr.length) {
      if (time <= n) {
        sumArr.push(sum);
      }
    } else {
      DFS(L + 1, sum + arr[L][0], time + arr[L][1]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, 0, 0);

  answer = Math.max(...sumArr);
  return answer;
}
let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr)); */

//중복순열(다중 for문과 재귀의 차이점)
/* function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);

  return answer;
}

console.log(solution(3, 2)); */

//동전 교환(DFS-Cut Edge Tech) 불필요한 재귀 제거
/* function solution(arr, n) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    if (sum > n) return;
    if (L >= answer) return;
    if (sum === n) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(arr, 15)); */
