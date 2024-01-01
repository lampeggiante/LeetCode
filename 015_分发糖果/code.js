/* n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

你需要按照以下要求，给这些孩子分发糖果：

每个孩子至少分配到 1 个糖果。
相邻两个孩子评分更高的孩子会获得更多的糖果。
请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。 */
/**
 * @param {number[]} ratings
 * @return {number}
 */

const candy = ({ ratings }) => {
  if (!Array.isArray(ratings) || ratings.length === 0) return 0
  let sugar = []
  sugar[0] = 1
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      sugar[i] = sugar[i - 1] + 1
    } else {
      sugar[i] = 1
    }
    console.log(`1:i:${i} sugar:${sugar}`)
  }
  for (let i = ratings.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i] && sugar[i - 1] <= sugar[i]) {
      sugar[i - 1] = sugar[i] + 1
    }
    console.log(`2:i:${i} sugar:${sugar}`)
  }
  return sugar.reduce((sum, s) => sum + s, 0)
}

const demo1 = { ratings: [1,0,2] }
const demo2 = { ratings: [1,2,2] }
const demo3 = { ratings: [1,2,87,87,87,2,1] }

console.log('result:', candy({ ...demo1 }))
console.log('result:', candy({ ...demo2 }))
console.log('result:', candy({ ...demo3 }))
