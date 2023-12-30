/* 
  给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

  你可以假设数组是非空的，并且给定的数组总是存在多数元素。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const len = nums.length
  let count = 0, temp, index
  while (count < len / 2) {
    temp = nums[0]
    nums.shift()
    count = 1
    while (true) {
      index = nums.indexOf(temp)
      if (index === -1) {
        break
      } else {
        count++
        nums.splice(index, 1)
      }
      console.log(nums)
    }
  }
  return temp
}

let demo1 = { nums: [3,2,3] }
let demo2 = { nums: [2,2,1,1,1,2,2] }

console.log(majorityElement(demo1.nums))
console.log(majorityElement(demo2.nums))
