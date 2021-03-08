<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="isAllCompleted"
    />
    <label for="toggle-all">Mark all as complete</label>
    
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  computed: {
    isAllCompleted: {
      get() {
        // toggleAll的get依赖于todos的isCompleted是否完全为true
        return this.$store.getters.isAllCompleted;
      },
      set(newValue) {
        // toggleAll的set让todos的isCompleted值与它保持一致
        this.$store.commit("syncToggleAll", newValue);
      }
    }
  }
}
</script>

<style>
</style>