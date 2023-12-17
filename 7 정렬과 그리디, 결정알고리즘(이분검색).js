//선택 정렬

/* function solution(a) {
  let answer = a;

  for (let i = 0; i < a.length; i++) {
    let idx = i; //최소값의 위치 저장용
    for (let j = i + 1; j < a.length; j++) {
      if (a[idx] > a[j]) idx = j;
    }
    [a[i], a[idx]] = [a[idx], a[i]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr)); */

//버블정렬
/* function solution(a) {
  let answer = a;

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr)); */

//스페셜 소트 버블 정렬 복습

/* function solution(a) {
  let answer = a;

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > 0 && a[j + 1] < 0) [a[j], a[j + 1]] = [a[j + 1], a[j]];
    }
  }

  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr)); */

//삽입 정렬 j=i-1

/* function solution(a) {
  let answer = a;

  for (let i = 0; i < a.length; i++) {
    let tmp = a[i],
      j = i - 1;
    for (j; j >= 0; j--) {
      if (a[j] > tmp) a[j + 1] = a[j];
      else break;
    }
    a[j + 1] = tmp;
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10];
console.log(solution(arr)); */

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

//장난꾸러기 현수 정렬 비교
/* function solution(a) {
  let answer = [];
  let sortArr = a.slice().sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== sortArr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

let arr = [10, 130, 150, 150, 130, 150];

console.log(solution(arr));
 */

//좌표 정렬
/* function solution(a) {
  let answer = a;
  a.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(arr)); */

//회의실 배정
/* function solution(meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else return a[1] - b[1];
  });
  console.log(meeting);

  let et = 0;
  for (let i = 0; i < meeting.length; i++) {
    if (et <= meeting[i][0]) {
      answer++;
      et = meeting[i][1];
    }
  }
  return answer;
}

let arr = [
  [3, 3],
  [2, 3],
  [1, 3],
];

console.log(solution(arr));
 */

//결혼식
/* function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];
  for (x of times) {
    timeLine.push({ time: x[0], start: true });
    timeLine.push({ time: x[1], start: false });
  }
  // 시간에 따라 정렬하되, 동일한 시간의 경우 종료 지점을 우선시
  timeLine.sort((a, b) => {
    if (a.time === b.time) return a.start - b.start;
    else return a.time - b.time;
  });

  let currentPeople = 0;

  for (let i = 0; i < timeLine.length; i++) {
    if (timeLine[i].start) {
      currentPeople++;
    } else {
      currentPeople--;
    }
    answer = Math.max(answer, currentPeople);
  }

  return answer;
}

let arr = [
  [1, 3],
  [4, 8],
  [5, 9],
  [6, 10],
];

console.log(solution(arr)); */

//이분검색  while (lt <= rt)
/* function solution(a) {
  let answer;

  a.sort((a, b) => a - b);
  let lt = 0,
    rt = a.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (a[mid] === 32) {
      answer = mid + 1;
      break;
    } else if (a[mid] > 32) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 56, 32, 99, 81];

console.log(solution(arr));
 */

//뮤직비디오(결정알고리즘)

/* function count(a, capacity) {
  let result = 1;
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
    if (sum > capacity) {
      result++;
      sum = a[i];
    }
  }
  return result;
}

function solution(a, m) {
  let answer;
  let lt = Math.max(...a); //최소한의 용량
  rt = a.reduce((a, c) => a + c); //최대한의 용량
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(a, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }

  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(arr, 3));
 */

//마구간 정하기(결정알고리즘)
function count(a, dist) {
  let cnt = 1;
  let ep = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i] - ep >= dist) {
      cnt++;
      ep = a[i];
    }
  }
  return cnt;
}

function solution(a, m) {
  let answer;
  a.sort((a, b) => a - b);
  let lt = 1;
  let rt = a[a.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(a, mid) >= m) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(arr, 3));
