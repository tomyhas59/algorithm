function mergeSort(arr) {
  // 배열의 길이가 1 이하인 경우, 이미 정렬된 상태
  if (arr.length <= 1) {
    return arr;
  }

  // 배열을 두 부분으로 나누기
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // 왼쪽 부분
  const right = mergeSort(arr.slice(mid)); // 오른쪽 부분

  // 정렬된 두 배열을 병합하기
  return merge(left, right);
}

function merge(left, right) {
  const sortedArray = [];
  let i = 0; // 왼쪽 배열의 인덱스
  let j = 0; // 오른쪽 배열의 인덱스

  // 두 배열을 비교하여 정렬된 배열 만들기
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  // 나머지 요소들을 추가하기
  return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

// 예시 배열
const arr = [5, 2, 4, 6, 1, 3];
const sortedArr = mergeSort(arr);
console.log("정렬된 배열:", sortedArr);
