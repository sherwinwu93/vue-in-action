<template>
  <div class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="你接下来做什么?" v-model="newTodo" @keyup.enter="addTodo()">
    </header>
    <section class="main" v-show="todos.length">
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
            v-for="todo in todos"
            :key="todo.id">
          <!--双向同步-->
          <todo-item
              v-bind:title.sync="todo.title"
              v-bind:completed.sync="todo.completed"
              @delete="removeTodo(todo)"
          ></todo-item>
        </li>
      </transition-group>
      <footer class="footer" v-show="todos.length">
        <span class="todo-count">
          <strong>{{remaining}}</strong> {{remaining | pluralize}} left
        </span>
        <button class="clear-completed" @click="clearCompleted()">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
import Velocity from "velocity-animate";

let id = 1;
export default {
  name: "App",
  components: {TodoItem},
  data () {
    return {
      newTodo: "",
      todos: [
        {id: 0, title: 2}
      ],
      editedTodo: {},
    }
  },
  computed: {
    remaining () {
      return this.todos.filter(x => !x.completed).length;
    }
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
    beforeEnter(el) {
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

<style scoped>
@import "../public/index.css";
</style>