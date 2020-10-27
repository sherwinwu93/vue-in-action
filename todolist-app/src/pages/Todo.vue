<template>
  <div class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
             placeholder="你接下来做什么?"
             v-model="newTodo"
             @keyup.enter="addTodo()"
             v-autofocus>
    </header>
    <section class="main">
      <transition-group
          name="staggered-fade"
          tag="ul"
          v-bind:css="false"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
          class="todo-list"
      >
        <li class="todo"
            :class="{completed: todo.completed}"
            v-for="todo in computedTodos"
            :key="todo.id">
          <!--双向同步-->
          <todo-item
              v-bind:title.sync="todo.title"
              v-bind:completed.sync="todo.completed"
              @delete="removeTodo(todo)"
          ></todo-item>
        </li>
      </transition-group>
      <footer class="footer">
        <span class="todo-count">
          <strong>{{computedTodos.length}}</strong> {{computedTodos.length | pluralize}} left
        </span>
        <ul class="filters">
          <li>
            <router-link :to="{query: {state: ''}}"
                         active-class="selected" exact>
              All
            </router-link>
          </li>
          <li>
            <router-link :to="{query: {state: 'active'}}"
                         active-class="selected" exact>
              Active
            </router-link>
          </li>
          <li>
            <router-link :to="{query: {state: 'completed'}}"
                         active-class="selected" exact>
              Completed
            </router-link>
          </li>
        </ul>
        <button class="clear-completed" @click="clearCompleted()">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";
import Velocity from "velocity-animate";

let id = 0;
export default {
  name: "Todo",
  components: {TodoItem},
  directives: {
    autofocus: {
      inserted: function (el) {
        el.focus();
      }
    }
  },
  data () {
    return {
      id: parseInt(localStorage.getItem("id") || "0"),
      newTodo: "",
      todos: JSON.parse(localStorage.getItem("todos") || "[]"),
      editedTodo: {},
    }
  },
  watch: {
    todos (newVal) {
      //还可以使用sessionStorage
      localStorage.setItem("todos", JSON.stringify(newVal));
    }
  },
  computed: {
    //计算当前可见的备忘
    computedTodos () {
      const state = this.$route.query.state;
      const filterTodos = this.todos.filter(x => {
        if (state === 'active') {
          return !x.completed;
        } else if (state === 'completed') {
          return x.completed;
        } else {
          return true;
        }
      });
      return filterTodos.filter(item => {
        return item.title.toLowerCase().indexOf(this.newTodo.toLowerCase()) !== -1;
      });
    },
  },
  filters: {
    pluralize (num) {
      return num > 1 ? 'items' : 'item';
    }
  },
  methods: {
    addTodo () {
      if (!this.newTodo) {
        return;
      }
      this.todos.unshift({
        id: id++,
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
    removeTodo (todo) {
      const index = this.todos.findIndex(x => x.id === todo.id);
      this.todos.splice(index, 1);
    },
    clearCompleted () {
      this.todos = this.todos.filter(x => !x.completed);
    },
    beforeEnter (el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter (el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(function () {
        Velocity(
          el,
          {opacity: 1, height: '58px'},
          {complete: done}
        )
      }, delay)
    },
    leave (el, done) {
      const delay = el.dataset.index * 150;
      setTimeout(function () {
        Velocity(
          el,
          {opacity: 0, height: 0},
          {complete: done}
        )
      }, delay)
    }
  }
}
</script>

<style>
@import "https://unpkg.com/todomvc-app-css@2.1.0/index.css";
*, ::after, ::before {
  box-sizing: inherit;
}
</style>
