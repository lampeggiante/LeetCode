/* 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function({ s }) {
  const res = []
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ' && res.length !== 0) break
    if (s[i] !== ' ') res.unshift(s[i])
    console.log(i, res, s[i])
  }
  return res.length
};
const demo1 = { s: "Hello World" }
const demo2 = { s: "   fly me   to   the moon  " }
const demo3 = { s: "luffy is still joyboy" }
console.log('result:', lengthOfLastWord({ ...demo1 }))
console.log('result:', lengthOfLastWord({ ...demo2 }))
console.log('result:', lengthOfLastWord({ ...demo3 }))
