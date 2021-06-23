// async function numSort(){
//   const a = await disUpdateMsg1()
//   // console.log(a)
//   const b = await disUpdateMsg2()
//   // console.log(b)
//   await disUpdateMsg3()
// }
// async function disUpdateMsg1(){
//   setTimeout(() => {
//       console.log('1')
//   }, 4000);
// }
// async function disUpdateMsg2(){
//   setTimeout(() => {
//       console.log('2');
//   }, 1000);
// }
// async function disUpdateMsg3(){
//   setTimeout(() => {
//       console.log('3');
//   }, 5000);
// }

// numSort()

async function numSort(){
  const a = await disUpdateMsg1()
  console.log(a)
  const b = await disUpdateMsg2()
  console.log('b', b)
  await disUpdateMsg3()
}
function disUpdateMsg1(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('1')
      resolve()
    }, 4000);
  })
}
async function disUpdateMsg2(){
  return disUpdateMsg4().then(res => {
    console.log('res', res)
    return res
  })
  setTimeout(() => {
      console.log('2');
  }, 1000);
}
async function disUpdateMsg3(){
  setTimeout(() => {
      console.log('3');
  }, 5000);
}

function disUpdateMsg4(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('4')
      resolve('4')
    }, 1000);
  })
}

// let s = 0
// setInterval(() => {
//   console.log('记时', s++)
// }, 1000)
numSort()