mixin = {
    data(){
        return {
            msg: 'mixin的信息',
            msg1: '我是mixin msg1',
            num: 1
        }
    },
    methods:{
        add(){
            console.log('add  mixin add')
        },
        async asynfn(){
            let result = await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(1)
                },10)
                // return 2
            })
            return result
        },
        asyncfn1 (){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(1999)
                },10)
            })         
        }
    },
    created(){
        console.log('mixin created')
    },
    mounted(){
        console.log('mixin mounted')
    },
}
