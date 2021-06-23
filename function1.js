let n = 10;
function fn1() {
  let n = 20;
  console.log(n)
}

function fn2(n) {
  console.log(n)
}

function fn3() {
  console.log(n)
}

function main() {
  let n = 30;
  fn1()
  fn2(n)
  fn3()
  {
    let n = 40;
    console.log(n)
  }
  console.log(n)
}

main()