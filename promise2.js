new Promise(res => {
    setTimeout(() => {
      console.log('macro1')
      res()
    }, 0)
  }).then(() => {
    console.log('micro1')
  })

new Promise(res => {
    setTimeout(() => {
      console.log('macro2')
      res()
    }, 0)
  }).then(() => {
    console.log('micro2')
  })
