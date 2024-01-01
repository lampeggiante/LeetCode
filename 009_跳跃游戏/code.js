/* 
  给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

  判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = ({ nums }) => {
  if (nums.length < 2) return true
  let last = nums.length - 1, i, res
  while (last > 0) {
    res = false
    for (i = last - 1; i >= 0; i--) {
      console.log('检验数：', nums[i] - last + i + 1)
      if (nums[i] > last - i - 1) {
        res = true
        break
      }
    }
    console.log('检验结果：', res)
    if (res) {
      last--
    } else {
      return res
    }
  }
  return res
}

const demo1 = { nums: [2,3,1,1,4] }
const demo2 = { nums: [3,2,1,0,4] }

console.log('demo1结果：', canJump({ ...demo1 }))
console.log('demo2结果：', canJump({ ...demo2 }))
