/* 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。 */
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = ({ height }) => {
  // 第一步找到最大值
  let max = 0
  height.forEach(h => {
    if (h > max) max = h
  })
  // 一步步减小最大值，获取每一个大于该值的数字的索引
  let res = 0, last = -1
  while (max > 0) {
    for (let i = 0; i < height.length; i++) {
      if (height[i] >= max) {
        if (last !== -1) {
          res += i - last - 1
        }
        last = i
      }
      console.log(`max:${max} height:${height[i]}\nlast:${last} i:${i} res:${res}`)
    }
    last = -1
    max--
  }
  return res
}

const demo1 = {
  height: [0,1,0,2,1,0,1,3,2,1,2,1]
}

const demo2 = {
  height: [4,2,0,3,2,5]
}

console.log('result:', trap({ ...demo1 }))
console.log('result:', trap({ ...demo2 }))
