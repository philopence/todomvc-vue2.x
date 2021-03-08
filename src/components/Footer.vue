<template>
  <!-- This footer should be hidden by default and shown when there are todos -->
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{counter}}</strong> {{pluralize(counter)}} left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li v-for="nav in routeNavs" :key="nav.id">
        <a
          :href="nav.href"
          :class="{selected: nav.href.slice(1) === $route.path}"
          @click="toggleSelected(nav.href)">{{nav.text}}</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed"
      @click="removeAllCompletedTodos"
      v-show="doneCounter">Clear completed</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      filterType: '/',
      routeNavs: [
        {id: 1, href: '#/', text: 'All'},
        {id: 2, href: '#/active', text: 'Active'},
        {id: 3, href: '#/completed', text: 'Completed'}
      ]
    }
  },
  computed: {
    counter() {
      return this.$store.getters.undoneTodos.length
    },
    doneCounter() {
      return this.$store.getters.doneTodos.length
    }
  },
  methods: {
    pluralize(counter) {
      if (counter === 1) {
        return 'item'
      }
      return 'items'
    },
    removeAllCompletedTodos() {
      this.$store.commit('removeAllCompletedTodos')
    },
    toggleSelected(href) {
      this.filterType = href.slice(1)
    }
  }
}
</script>

<style>
</style>