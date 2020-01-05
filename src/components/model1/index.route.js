let router = require.context("./pages",true,/.vue/); //  require.context()是webpack提供的方法,这个方法的第一个参数是require的一个文件夹，第二个参数是否遍历子目录，第三个参数是筛选什么类型的文件
let arr = [];
// router是一个方法，直接调用会出错，router.keys()是router里的一个静态方法。
console.log(router.keys()); // ["./model1.index.vue", "./model1.second.vue"]
router.keys().forEach((key) => {
    let _keyarr=key.split("."); // 分割字符串。如"./model1.index.vue"
    if(key.indexOf("index")!=-1){ // 判断每一项字符串是否有index,有即首页
        arr.push({
            path:_keyarr[1],
            component:router(key).default, // 相当于import
            meta:{
                title:_keyarr[1].replace('/','') // 删除"/"
            }
        }) 
    }
    else{
        arr.push({
            path:_keyarr[1]+"/"+_keyarr[2],
            component:router(key).default,
            meta:{
                title:_keyarr[2]
            }
        })
    }
});
export default arr