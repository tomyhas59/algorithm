//올바른 괄호(스택)

/* function solution(s) {
  let answer = "YES";
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop(s[i]);
    }
  }
  if (stack.length > 0) return "NO";

  return answer;
}
let arr = "(()()()()())";
console.log(solution(arr)); */

//괄호 문자 제거(스택)
/* function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      let index = answer.lastIndexOf("(");
      answer.splice(index);
    } else {
      answer.push(s[i]);
    }
  }
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] === ")") {
  //     while (stack.pop() !== "(");
  //   } else stack.push(s[i]);
  // }
  answer = answer.join("");
  return answer;
}
let arr = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(arr));
 */

//크레인 인형뽑기

/* function solution(board, moves) {
  let answer = 0;
  let stack = [];

  // for (let i = 0; i < moves.length; i++) {
  //   for (let j = 0; j < board.length; j++) {
  //     if (board[j][moves[i] - 1] !== 0) {
  //       stack.push(board[j][moves[i] - 1]);
  //       board[j][moves[i] - 1] = 0;
  //       if (
  //         stack.length >= 2 &&
  //         stack[stack.length - 1] === stack[stack.length - 2]
  //       ) {
  //         stack.pop();
  //         stack.pop();
  //         answer += 2;
  //       }
  //       break;
  //     }
  //   }
  // }

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
}
let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let moves = [1, 5, 3, 5, 1, 2, 1, 2];

console.log(solution(board, moves));
 */

//후위식 연산(postfix)

/* function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) {
      stack.push(Number(x));
    } else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "-") stack.push(lt - rt);
    }
  }
  answer = stack[0];

  return answer;
}
let arr="352+*9-"
console.log(solution(arr));
 */

//쇠막대기

/* function solution(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      stack.pop();
      if (s[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer++;
      }
    }
  }
  return answer;
}
let str = "(((()(()()))(())()))(()())";

console.log(solution(str));
 */

//공주 구하기(큐)

/* function solution(n, k) {
  let answer;
  let que = [];

  for (let i = 0; i < n; i++) {
    que.push(i + 1);
  }

  while (que.length > 1) {
    for (let i = 1; i < k; i++) que.push(que.shift());
    que.shift();
  }
  answer = que[0];
  return answer;
}

console.log(solution(8, 3));
 */

//교육과정 설계

function solution(s, a) {
  let answer = "YES";
  let que = s.split("");

  for (let x of a) {
    if (que.includes(x)) {
      if (que.indexOf(x) === 0) que.shift();
      else return "NO";
    }
  }
  if (que.length > 0) return "NO";

  return answer;
}

let subject = "ACB";
let arr = "AGEDF";
console.log(solution(subject, arr));
