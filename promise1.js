function fn1() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('fn1')
      resolve()
    }, 2000)
  })
}
function fn2(params) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('fn2', params)
      resolve(2)
    }, 1000)
  })
}

function fn3 () {
   return fn2('cc')
   .then(res => {
     return Promise.reject(false)
   })
}
console.log(fn3())