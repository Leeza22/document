/**
 * in
 * 遍历自身+原型链上可枚举的属性
 *
 * Object.keys() 只遍历自身属性
 */

let obj1 = {
  name: 'xxx',
  age: '16'
}

let obj2 = {
  sex: '女',
  height: '1.88',
  weight: '45'
}
Object.assign(Object.getPrototypeOf(obj1), obj2)

for(let key in obj1) {
  console.log(key)
  // name
  // age
  // sex
  // height
  // weight
}

console.log(Object.keys(obj1));
// [ 'name', 'age' ]