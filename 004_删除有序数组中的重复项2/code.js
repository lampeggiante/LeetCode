/* 
  给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。

  不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let i = 0, count = 1
  for (j = 1; j < nums.length; j++) {
    if (nums[i] === nums[j]) {
      if (count === 1) {
        count++
        nums[++i] = nums[j]
      }
    } else {
      count = 1
      nums[++i] = nums[j]
    }
    console.log(nums)
  }
  return i + 1
}

let demo1 = { nums: [1,1,1,2,2,3] }
let demo2 = { nums: [0,0,1,1,1,1,2,3,3] }

console.log(removeDuplicates(demo1.nums))
console.log(removeDuplicates(demo2.nums))
