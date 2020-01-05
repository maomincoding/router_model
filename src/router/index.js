import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = require.context("../components",true,/\.route\.js/);
let arr=[];
router.keys().forEach((key) => {
  arr=arr.concat(router(key).default); // 拼接数组
});

export default new Router({
  routes: [
    ...arr // 展开数组
  ]
})

// 规范化命名（模块名.业务名.vue）
// 不用书写