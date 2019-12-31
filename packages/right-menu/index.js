// 导入组件，组件必须声明 name
import JgRightMenu from './src/main.vue'
 
// 为组件添加 install 方法，用于按需引入
JgRightMenu.install = function (Vue) {
  Vue.component(JgRightMenu.name, JgRightMenu)
}
 
export default JgRightMenu