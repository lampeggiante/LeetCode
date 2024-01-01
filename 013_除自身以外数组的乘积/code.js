/* 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请 不要使用除法，且在 O(n) 时间复杂度内完成此题。 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = ({ nums }) => {
  let res = [1]
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1]
  }
  console.log('left:', res)
  let right = 1
  for (let j = nums.length - 2; j >= 0; j--) {
    right *= nums[j + 1]
    res[j] *= right
  }
  return res
}

const demo1 = { nums: [1,2,3,4] }
const demo2 = { nums: [-1,1,0,-3,3] }

console.log('result:', productExceptSelf({ ...demo1 }))
console.log('result:', productExceptSelf({ ...demo2 }))
