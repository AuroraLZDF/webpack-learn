//import './style.css';
// 导入 VUe 框架
import Vue from 'vue';
// 导入 app.vue 组件
import App from './componnets/app.vue';

// 创建 Vue 根实例
new Vue({
    el: '#app',
    render: h => h(App)
});

//document.getElementById('app').innerHTML = 'Hello webpack!';