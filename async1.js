function foo(c) {
  return c > 2
}


let arr = [3,1,4,2]



// 根据上一个结果 判断下一次执行
// arr.forEach(v => {
//   console.log(v)
//   if(!foo(v)) {
//     console.log(c)
//     return
//   }
// })

// for(let i in arr) {
//   console.log(arr[i])
//   console.log(foo(arr[i]))

//   if(!foo(arr[i])) {
//     console.log(arr[i])
//     return arr[i]
//     break
//   }
// }

const parttern = '^.{2,9}$'
let reg = new RegExp(parttern)
console.log(reg)
console.log(reg.test('1wo asu'))
