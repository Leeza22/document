const MyPromise = require('./promise3')

const say = () => {
  return new MyPromise((res, rej) => {
    setTimeout(() => {
      res('xxx')
    }, 2000)
    // res('xxx')
  })
}

say()
.then(value => {
  console.log(value)
  throw new Error('csad')
  return 2
})
.then(value => {
  console.log(2)
  return 5
})
.then (value => {
  console.log(3)
})

// 不能返回自身
 // const p1 = new Promise((resolve, reject) => {
  //   resolve(100)
  // })
  // const p2 = p1.then(value => {
  //   console.log(value)
  //   return p2
  // })