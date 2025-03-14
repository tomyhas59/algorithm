//두 수의 최대공약수
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(3, 12));

//두 수의 최소공배수

function lcm(a, b) {
  return (a * b) / gcd(a, b); // LCM 공식
}
