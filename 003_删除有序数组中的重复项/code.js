/* 
  给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。

  考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：

  更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
  返回 k 。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

let demo1 = {
  nums: [1, 1, 2]
}

let demo2 = {
  nums: [0,0,1,1,1,2,2,3,3,4]
}

const removeDuplicates = (nums) => {
  let index = 0
  while (nums[index] !== undefined) {
    if (nums[index] === nums[index + 1]) {
      nums.splice(index + 1, 1)
    } else {
      index++
    }
    console.log(nums)
  }
  return index
}

console.log(removeDuplicates(demo1.nums))
console.log(removeDuplicates(demo2.nums))
