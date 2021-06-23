function* foo(a, b) {
  yield 1
  yield a
  yield b
  yield a + b
}

const res = foo(2, 5)
console.log(res)
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
