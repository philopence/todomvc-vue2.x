import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_KEY = 'todos-vue'
const storage = {
  get() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  },
  set(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

export default new Vuex.Store({
  state: {
    // todos: [
    //   {id: 1, title: 'Taste JavaScript', isCompleted: true},
    //   {id: 2, title: 'Buy a unicorn', isCompleted: false}
    // ]
    todos: storage.get()
  },
  getters: {
    // 判断todos是否为空，为空返回true，否则返回false
    isNoTodos: state => {
      return state.todos.length === 0
    },
    // 检查todos是否全部完成，是则返回true，否则返回false
    isAllCompleted: state => {
      return state.todos.every(todo => todo.isCompleted)
    },
    // 获取todos中未完成的todos
    undoneTodos: state => {
      return state.todos.filter(todo => !todo.isCompleted)
    },
    // 获取todos中完成的todos
    doneTodos: state => {
      return state.todos.filter(todo => todo.isCompleted)
    }
  },
  mutations: {
    // payload为一个todo对象，添加到todos列表中
    newTodo: (state, payload) => {
      const todos = state.todos
      todos.push(payload)
      storage.set(todos)
    },
    // payload为布尔值，让所有todo.isCompleted的值于它保持一致
    syncToggleAll: (state, payload) => {
      const todos = state.todos
      todos.forEach(todo => {
        todo.isCompleted = payload
      })
      storage.set(todos)
    },
    // payload为index值，删除对应的todo
    removeTodo: (state, payload) => {
      const todos = state.todos
      todos.splice(payload, 1)
      storage.set(todos)
    },
    removeAllCompletedTodos: state => {
      const todos = state.todos
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].isCompleted) {
          todos.splice(i, 1)
          i--
        }
      }
      storage.set(todos)
    },
    // payload为index值，修改对应的todo.title
    modifiedTodo: (state, payload) => {
      const todos = state.todos
      todos[payload.index].title = payload.value
      storage.set(todos)
    },
    // payload = {index, isCompleted}
    toggleIsCompleted: (state, payload) => {
      const todos = state.todos
      todos[payload.index].isCompleted = payload.isCompleted
      storage.set(todos)
    }
  },
  actions: {
  },
  modules: {
  }
})
