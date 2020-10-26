<template>
  <div :class="{ editing: isEdited }">
    <div class="view">
      <input class="toggle" type="checkbox" @change="updateChecked($event.target.checked)">
      <label @dblclick="editTodo()">{{title}}</label>
      <button class="destroy" @click="removeTodo()"></button>
    </div>
    <!--编辑框-->
    <input class="edit" type="text"
           v-model="editingTitle"
           v-if="isEdited"
           @blur="doneEdit()"
           @keyup.enter="doneEdit()"
           @keyup.esc="cancelEdit()"
    >
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data () {
    return {
      isEdited: false,
      editingTitle: ""
    }
  },
  //子接父的值
  props: {
    title: {
      type: String,
      default: ""
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    doneEdit () {
      if (this.isEdited)  {
        //更新绑定的title
        this.$emit('update:title', this.editingTitle);
        this.isEdited = false;
      }
    },
    cancelEdit () {
      this.isEdited = false;
    },
    editTodo () {
      this.editingTitle = this.title;
      this.isEdited = true;
    },
    updateChecked (completed) {
      this.$emit("update:completed", completed);
    },
    removeTodo () {
      this.$emit("delete");
    }
  }
}
</script>

<style scoped>
.todo-list li .editing .view {
  display: none;
}
.todo-list li .editing .edit {
  display: block;
  width: 506px;
  padding: 12px 16px;
  margin: 0 0 0 43px;
}
</style>