import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component("propObject", {
  template: "<div>{{message}}</div>",
  data () {
    return {
      "message": "吴盛东"
    }
  },
  // 简单的数组
  // props: ["propA", "propB", "propC", "propD", "propE", "propF"],
  // 高级配置
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return {message: "hello"};
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        // 当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      }
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
