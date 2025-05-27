//두 수의 최대공약수
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

console.log(gcd(3, 12));

//두 수의 최소공배수

function lcm(a, b) {
  return (a * b) / gcd(a, b); // 최소공배수 공식
}
