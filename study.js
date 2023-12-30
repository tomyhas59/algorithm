//중복 없는 조합 구하기
/* function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        {
          tmp[L] = i;
          DFS(L + 1, i + 1);
        }
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
 */

//콤비네이션 구하는 법
function combi(n, r) {
  if (dy[n][r] > 0) return dy[n][r];
  if (n === r || r === 0) return 1;
  else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
}

//순열 모든 조합 구하기
/* function solution(arr, n) {
  let answer = [];
  let ch = Array.from({ length: arr.length }, () => 0);
  let tmp = Array.from({ length: n }, () => 0);

  function DFS(L) {
    if (L === n) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(arr, 2)); */

//List Recently Used  캐시 변형(오랜 미사용 제거)

/* function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    //x가 answer 배열에 있다면
    for (let i = 0; i < size; i++) {
      if (x === answer[i]) pos = i;
    }

    //x가 answer 배열에 없다면
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
      // for (let i = size - 1; i >= 1; i--) {
      //   answer[i] = answer[i - 1]; //answer 배열의 값이 뒤로 당겨짐
      // }
      // //비어 있는 0번에 x 넣기
      // answer[0] = x;
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
      // for (let i = pos; i >= 1; i--) {
      //   answer[i] = answer[i - 1];
      // }
      // answer[0] = x;
    }
  });

  return answer;
}
let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr)); */
