# todolist-update
### 子组件的分离
1. 维护自身状态
2. 数据双向绑定 父 v-bind:title.sync="todo.title"
            子 {props: {title: {type: String, default:"""}}}
3. 事件子->父 父亲监视子的$emit('method'),做@method

### 路由的使用
1. Vue.use(VueRouter)
2. routes = [{}, {path: "*", redirect: {name: "Todo"}}]
3. let router = new VueRouter({routes});

### 公共函数和公共变量
export default

### Promise
1. 先构造 xx(11) { return new Promse((resolve, reject)=> {});}
2. 再使用 xx().then(21).catch(22);
3. 在 11里执行代码, 如果11里reject()了,进入22,如果11里resolve进入21

### Promise与事件监听的组合使用

### Tips
1. 重构要仔细检查引入,否则找不到错误
2. 认清出父子结构,在脑子里有个大致的图,否则极其容易样式污染
