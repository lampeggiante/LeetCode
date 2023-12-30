/* 
  给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse = (nums, start, end) => {
  while (start < end) {
    [nums[start++], nums[end--]] = [nums[end], nums[start]]
  }
}

const rotate = ({nums, k}) => {
  let l = k % nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, l - 1)
  reverse(nums, l, nums.length - 1)
  return nums
}

let demo1 = {
  nums: [1,2,3,4,5,6,7],
  k: 3
}

let demo2 = {
  nums: [-1,-100,3,99],
  k: 2
}

console.log(rotate({...demo1}))
console.log(rotate({...demo2}))
