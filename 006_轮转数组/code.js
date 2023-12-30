/* 
  给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = ({nums, k}) => {
  let m = k % nums.length
  nums.unshift(...nums.slice(nums.length - m))
  console.log(nums)
  nums.splice(nums.length - m, m)
  console.log(nums)
}

let demo1 = {
  nums: [1,2,3,4,5,6,7],
  k: 3
}

let demo2 = {
  nums: [-1,-100,3,99],
  k: 2
}

rotate({...demo1})
rotate({...demo2})
