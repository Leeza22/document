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

async function fn() {
  await fn1()
  fn2()
}
fn()


// promise 方案
const query = (params) => {
  return new Promise((resolve,reject) => {
    // vueHttp. //
     //发起请求 请求结果
     // 请求成功结果用
     resolve(res, '这里是return 的结果数据')
     // 请求失败
     reject(这里就是请求失败 中断执行 catch中接收的东西)
  })
}
//使用时候
apirequest(params)
  .then(res => {
    成功后面的操作
  })
  .catch(res => {
    失败处理
  })

  // callback 方案
const apirequest = (params, callback) => {
     //发起请求 请求结果
    请求结果用
    callback(res, '这里是return 的结果数据')
}

使用时候
apirequest(params, (res) => {
  这里执行后面操作
})
