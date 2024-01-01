/* 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。 */
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = ({ height }) => {
  // 从上往下的做法超时
  if (height.length === 0) return 0
  const leftMax = new Array(height.length).fill(0)
  const rightMax = new Array(height.length).fill(0)
  leftMax[0] = height[0]
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i-1])
  }
  rightMax[height.length - 1] = height[height.length - 1]
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }
  let res = 0
  for (let i = 0; i < height.length; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i]
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
