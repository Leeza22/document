// for of 遍历数组

/**
 * for...of...
 * 1. 不能遍历对象
 * 2. 遍历出的是值 不是索引
 * 3. 不会遍历自定义属性
 *
 * for of遍历数据结构的时候，会自动寻找iterator接口。也就是说一种数据结构只要部署了iterator接口，就可以用for of循环去执行遍历操作
 */


/**
 * iterable 可迭代的
 * 可迭代类型
 * 应用场景：
 * Array
 * 字符串 String
 * Map 和 Set  无法用下标获取 用这种方式遍历获取
 * 函数argumnents 对象  (类数组)
 * DOM NodeList对象  (类数组) querySelecterAll
 * Genetator 对象
 */

// const str = "我是王小波， 你好哇！"
// for(let item of str) {
//   console.log(item)
// }

const map = new Map()
// map 创建接收一个数组  数组成员必须是数组 键值对数组
map.set('name', 'uuu')
map.set('age', 15)
for(let item of map) {
  console.log(item)
}