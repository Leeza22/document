function fn(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = 'hello, ' + name
      // resolve(res)
      reject()
    },
    1000);
  })
}

async function get() {

    const res = await fn('xxx').catch(err => {
      console.log('cccc')
      return false
    })
    if(!res) return
   console.log('成功')

}

get()