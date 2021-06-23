const foo = (a) => (b, c) => {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
}

console.log(foo(1)(2, 3))