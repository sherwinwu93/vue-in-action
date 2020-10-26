<template>
  <div>
    <section class="todoapp">
      <header class="header">
        <!--标题-->
        <h1>todos</h1>
        <!--新增备忘-->
        <input class="new-todo" placeholder="接下来做什么?" v-model="newTodo" @keyup.enter="addTodo">
      </header>
      <section class="main" v-show="todos.length">
        <!--所有备忘-->
        <ul class="todo-list">
          <!--一条备忘-->
          <li v-for="todo in todos" class="todo" :key="todo.id"
              :class="{completed: todo.completed, editing: todo.id === editedTodo.id}">
            <div class="view">
              <!--选择某条备忘-->
              <!--是否选中-->
              <input class="toggle" type="checkbox" v-model="todo.completed">
              <!--双击操作备忘-->
              <label @dblclick="editTodo(todo)">{{todo.title}}</label>
              <!--删除操作-->
              <button class="destroy" @click="removeTodo(todo)"></button>
            </div>
            111
            <input class="edit" type="text" v-model="editedTodo.title"
                   @blur="doneEdit(editedTodo)"
                   @keyup.enter="doneEdit(editedTodo)"
                   @keyup.esc="cancelEdit()"
            >
          </li>
        </ul>
        <footer class="footer" v-show="todos.length">
          <span class="todo-count">
            <strong>{{remaining}}</strong>{{ remaining | pluralize}} left
          </span>
          <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
            Clear completed
          </button>
        </footer>
      </section>
    </section>
  </div>
</template>

<script>
let id = 1;
export default {
  name: "Todo",
  data () {
    return {
      todos: [],
      newTodo: "",
      editedTodo: {},
    }
  },
  computed: {
    //计算剩余未完成的备忘
    remaining() {
      return this.todos.filter(x => !x.completed).length;
    }
  },
  filters: {
    //计算单位
    pluralize(num) {
      return num > 1 ? 'items' : 'item'
    }
  },
  methods: {
    //新增备忘
    addTodo () {
      if (!this.newTodo) {
        return;
      }
      this.todos.unshift({
        id: id++,
        title: this.newTodo,
        completed: false
      });
      this.newTodo = "";
    },
    //编辑备忘
    editTodo(todo) {
      this.editedTodo = {...todo}
    },
    //移除备忘
    removeTodo(todo) {
      const index = this.todos.findIndex(x => x.id === todo.id)
      this.todos.splice(index, 1)
    },
    //清除完成的
    removeCompleted() {
      this.todos = this.todos.filter(x => !x.completed);
    },
    //完成备忘
    doneEdit(todo) {
      this.todos = this.todos.map(x => {
        return todo.id === x.id ? {...todo} : {...x}
      });
      this.editedTodo = {};
    },
    cancelEdit() {
      this.editedTodo = {}
    },
  }
}
</script>

<style scoped>
@import "https://unpkg.com/todomvc-app-css@2.1.0/index.css";
</style>

