

const pattern = '^\\d{2}$'

const str = process.argv[2]
console.log(str)
const reg = new RegExp(pattern)
console.log(reg)
const result = reg.test(str)
console.log(/^\d{2}$/.test('12'))
console.log(result)