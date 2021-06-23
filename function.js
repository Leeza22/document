console.log(f1,f2)
//返回为赋值之前的 function 关键词 声明的函数
//f2 undefined;

function f1(){
    return this.name
}

var name = "zhangsan"
//用let 定义访问不到 访问全局的name
console.log(f1())

var f2 = f1;

f1 = function(){
    return 1
}


var arr= [{name:"zzz",age: 13},{name:'aaa',age: 19}]
var arr2 = [1,3,2,8,4,9,0,-2]
arr.sort((a,b)=>{
    if(a.age > b.age) return -1
})

function F2(){
    this.ss = "ss",
    this.constructor = 'f2'
}
F2.prototype.say = function(){
    return this.ss
}
F2.prototype.name = function(){
    return this.constructor
}

function F1(){
    this.feature = '构造函数'
    let feature1 = '定义变量1'
    this.feature2 = feature1
}
F1.prototype.run = function(){
    return "run"
}


F1()  // 构造函数用法1

let instance1 = new F1()  // 构造函数用法2
// console.log(instance1)

let obj1 = { ins: 1}
F1.call(obj1)      // 构造函数用法3
console.log(obj1.feature1)

console.log(F1.prototype = F2.prototype)  // function 声明的函数时，会自动为函数创建prototype属性 指向原型对象，prototype原型对象 会自动加上constructor 属性 保存着指向原型对象的构造函数 的引用
F1.prototype = {}  // 这种方法相当于重写了构造函数的prototype对象 {}为Object构造函数new 出的新实例,它的constructor保存的是引用是指向 object 构造函数的  所以这时候  实例的constructor 指向object
// 改变constructor 改回指向方法
F1.prototype = {
    constructor: F1    /*
    这样写的属性是可枚举 可继承的  可以通过 Object.defineProperty(F1.prototype,"constructor",{
        enumerable: false
        value:F1
    })
    */ 
}


console.log(Array.prototype)  //[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
console.log(F1.prototype)     //{say: ƒ, name: ƒ, constructor: ƒ}
console.log(String.prototype) //String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
//一个是数组 一个是对象
let cc = new F1()
console.log(cc.constructor)
console.log(cc instanceof F1)
console.log(cc.feature)

// 继承了F1的自身this上的属性方法
// 继承了F2的prototype上的属性与方法
cc instanceof F1  //true
cc instanceof F2  //true

console.log(cc.constructor === F2) //true
console.log(cc.constructor === F1) //false





