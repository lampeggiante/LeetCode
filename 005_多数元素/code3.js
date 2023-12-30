/* 
  给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

  你可以假设数组是非空的，并且给定的数组总是存在多数元素。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 摩尔投票
const majorityElement = (nums) => {
  let num = nums[0]
    let count = 1

    for(let i = 1; i< nums.length; i++) {
        if(num===nums[i]) {
            count++
        } else {
            count--
            if(count===0) {
                num = nums[i]
                count++
            }
        }

    }

    return num
}

let demo1 = { nums: [3,2,3] }
let demo2 = { nums: [2,2,1,1,1,2,2] }

console.log(majorityElement(demo1.nums))
console.log(majorityElement(demo2.nums))
