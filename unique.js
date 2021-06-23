
var arr = [
  {id: 1, name: '周瑜1'},
  {id: 3, name: '王昭君1'},
  {id: 2, name: '李白1'},
  {id: 1, name: '周瑜2'},
  {id: 2, name: '李白2'},
  {id: 3, name: '王昭君2'}
]

let obj = {}
let newArr =  arr.reduce((pre, cur, curIndex, arr) => {
   if(!obj[cur.id]) {
     obj[cur.id] = 1
     if(cur.id !== 1) pre.push(cur)
   }
   return pre
}, [])
console.log(newArr)

