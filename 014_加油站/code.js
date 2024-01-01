/* 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
/* 
  分析： 满足三个条件
    1. 总汽油数要大于总耗油
    2. 初始
    3. 油箱不能为负数
*/
const canCompleteCircuit = ({ gas, cost }) => {
  let leftGas, j
  if (gas.length === 1) return 0
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] > cost[i]) {
      leftGas = gas[i] - cost[i]
      for (j = i + 1; j < i + gas.length; j++) {
        leftGas += gas[j % gas.length] - cost[j % gas.length]
        console.log(`i:${i},j:${j},left:${leftGas}`)
        if (leftGas < 0) break
      }
      if (leftGas >= 0) return i
    }
  }
  return -1
}

const demo1 = {
  gas: [1,2,3,4,5],
  cost: [3,4,5,1,2]
}

const demo2 = {
  gas: [2, 3, 4],
  cost: [3, 4, 3]
}

const demo3 = {
  gas: [5,1,2,3,4],
  cost: [4,4,1,5,1]
}

console.log('result:', canCompleteCircuit({ ...demo1 }))
console.log('result:', canCompleteCircuit({ ...demo2 }))
console.log('result:', canCompleteCircuit({ ...demo3 }))
