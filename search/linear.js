function linearSearch(arr, target) {
  // 배열에서 각 요소를 순차적으로 확인
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // 목표 값이 있으면 인덱스를 반환
    }
  }
  return -1; // 목표 값이 없으면 -1을 반환
}

// 예시 사용
const numbers = [1, 3, 7, 8, 2, 5];
const target = 8;
const result = linearSearch(numbers, target);
console.log(result); // 3 (타겟 값 8은 배열에서 3번째 인덱스에 위치)
