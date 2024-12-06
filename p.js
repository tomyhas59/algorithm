function solution(dots) {
  var answer = 0;

  const X = dots.map((v) => v[0]);
  const Y = dots.map((v) => v[1]);

  const minX = Math.min(...X);
  const minY = Math.min(...Y);

  const maxX = Math.max(...X);
  const maxY = Math.max(...Y);

  answer = (maxX - minX) * (maxY - minY);

  return answer;
}

const arr1 = [
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
];
const b1 = [11, 11];
const arr2 = [
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
];
const b2 = [7, 9];

console.log(solution(arr1));
