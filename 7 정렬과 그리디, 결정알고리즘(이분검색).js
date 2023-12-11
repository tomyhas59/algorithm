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

