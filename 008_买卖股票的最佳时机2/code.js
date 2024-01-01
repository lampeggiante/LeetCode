/* 
  给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

  在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

  返回 你能获得的 最大 利润 。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = ({ prices }) => {
  let last = prices.length - 1
  while (last > 0) {
    prices[last] -= prices[last - 1]
    last--
  }
  prices[0] = 0
  console.log(prices)
  return prices.reduce((sum, price) => price > 0? sum + price: sum, 0)
}

let demo1 = {
  prices: [7,1,5,3,6,4]
}
let demo2 = {
  prices: [1,2,3,4,5]
}
let demo3 = {
  prices: [7,6,4,3,1]
}

console.log(maxProfit({ ...demo1 }))
console.log(maxProfit({ ...demo2 }))
console.log(maxProfit({ ...demo3 }))
