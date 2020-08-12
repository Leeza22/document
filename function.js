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

function F1(){
    this.feature = '构造函数'
    let feature1 = '定义变量1'
    this.feature2 = feature1
}
F1()
console.log(feature)
// console.log(feature1)
let instance1 = new F1()
console.log(instance1)
console.log(instance1.feature1)

let obj1 = { ins: 1}
F1.call(obj1)
console.log(obj1.feature1)

