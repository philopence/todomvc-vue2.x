<template>
  <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        v-for="(todo, index) in todos"
        :key="todo.id"
        :class="{ completed: todo.isCompleted, editing: todo === currentTodo }"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="todo.isCompleted" @change="toggleIsCompleted(index, $event)" />
          <label @dblclick="toggleEditing(todo)">{{ todo.title }}</label>
          <button class="destroy" @click="removeTodo(index)"></button>
        </div>
        <input class="edit"
          :value="todo.title"
          @blur="modifiedTodo(index, $event)"
          @keyup.enter="modifiedTodo(index, $event)"
          @keyup.esc="cancelEdit(todo, $event)"
          v-todo-focus="todo === currentTodo"/>
      </li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      currentTodo: null,
    };
  },
  computed: {
    // 获取todos数据
    todos: {
      get() {
        return this.$store.getters.undoneTodos;
      }
    }
  },
  methods: {
    toggleEditing(todo) {
      this.currentTodo = todo;
    },
    modifiedTodo(index, event) {
      // 获取修改后的值
      const value = event.target.value.trim()
      // 如果值为空，则删除该项，否则修改todos的内容
      if (!value) {
        this.$store.commit('removeTodo', index)
      } else {
        // 修改对应index的值，id保持不变
        this.$store.commit('modifiedTodo', {index, value})
        this.currentTodo = null
      }
    },
    cancelEdit(todo, event) {
      event.target.value = todo.title
    },
    removeTodo(index) {
      this.$store.commit('removeTodo', index)
    },
    toggleIsCompleted(index, event) {
      const isCompleted = event.target.checked
      // console.log(isCompleted);
      this.$store.commit('toggleIsCompleted', {index, isCompleted})
    }
  }
}
</script>

<style>

</style>