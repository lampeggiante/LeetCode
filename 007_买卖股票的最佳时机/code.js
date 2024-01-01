/* 
  给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

  你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

  返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = ({ prices }) => {
  let t1 = 0, t2 = 0, j = 1, max = 0
  while (j < prices.length) {
    if (prices[j] < prices[t1]) {
      t1 = j
    }
    if (prices[j] > prices[t1] && prices[j] - prices[t1] > max) {
      t2 = j
      max = prices[t2] - prices[t1]
    }
    console.log('t1:', t1, 't2:', t2, 'max:', max)
    j++
  }
  return max
}

let demo1 = {
  prices: [7,1,5,3,6,4]
}
let demo2 = {
  prices: [7,6,4,3,1]
}

console.log(maxProfit({ ...demo1 }))
console.log(maxProfit({ ...demo2 }))
