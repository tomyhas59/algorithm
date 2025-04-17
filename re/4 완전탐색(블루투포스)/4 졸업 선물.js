/* 

졸업선물
선생님은올해졸업하는반학생들에게졸업선물을주려고합니다.
학생들에게인터넷쇼핑몰에서각자원하는상품을골라그상품의가격과배송비를제출하라
고했습니다선생님이가지고있는예산은한정되어있습니다. .
현재예산으로최대몇명의학생에게선물을사줄수있는지구하는프로그램을작성하세요.
선생님은상품하나를할인해서반가격살수있는쿠폰을가지고있습니다배송비는50% ( ) .
할인에포함되지않습니다.
 ▣입력설명
첫번째줄에반학생수과예산이주어진다N(1<=N<=1000) M(1<=M<=100,000,000) .
두번째줄부터줄에걸쳐각학생들이받고싶은상품의가격과배송비가입력됩니다N .
상품가격과배송비는각각을넘지않습니다상품가격은짝수로만입력됩니다100,000 . .
 ▣출력설명
첫번째줄에선생님이현재예산으로선물할수있는최대학생수를출력합니다.
선생님최소한개이상의상품을살수있는예산을가지고있습니다1 .
 ▣입력예제1
 528
 66
 22
 43
 45
 103
 ▣출력예제1
 4
출력설명
와를할인받아에사면비용이입니다(2, 2), (4, 3), (4, 5) (10, 3) (5, 3) 4+7+9+8=28 .
자주틀리는입력:
답console.log(solution(41, [[8, 6], [2, 2], [4, 3], [4, 5], [12, 1]])); // : 5
답console.log(solution(41, [[8, 6], [2, 2], [12, 1], [4, 5], [4, 3]])); // : 5
 console.log(solution(33,[[2,12],[8,4],[6,6],[6,7답]]));// :3
*/

function solution(budget, products) {
  let answer = 0;
  for (let i = 0; i < products.length; i++) {
    const discounted = [...products];
    discounted[i] = [discounted[i][0] / 2, discounted[i][1]];

    const costs = discounted
      .map(([price, delivery]) => price + delivery)
      .sort((a, b) => a - b);

    let count = 0;
    let sum = 0;

    for (let cost of costs) {
      if (sum + cost > budget) break;
      sum += cost;
      count++;
    }

    answer = Math.max(answer, count);
  }

  return answer;
}

console.log(
  solution(33, [
    [2, 12],
    [8, 4],
    [6, 6],
    [6, 7],
  ])
);
