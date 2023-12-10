//선택 정렬

function solution(a) {
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
console.log(solution(arr));
