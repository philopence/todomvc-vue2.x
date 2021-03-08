<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?"
			v-focus
			v-on:keyup.enter="newTodo"/>
  </header>
</template>

<script>
export default {
	data() {
		return {
			id: 0
		}
	},
	methods: {
		newTodo(event) {
			const value = event.target.value.trim()
			if (!value) {
				alert('Can not be empty!!!')
				return
			}
			this.$store.commit('newTodo', {
				id: ++this.id,
				title: value,
				isCompleted: false
			})
			event.target.value = ''
		}
	},
	directives: {
		focus: {
			inserted(el) {
				el.focus()
			}
		}
	}
}
</script>

<style scoped>
.todoapp input::-webkit-input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: rgba(0, 0, 0, 0.4);
}

.todoapp input::-moz-placeholder {
	font-style: italic;
	font-weight: 300;
	color: rgba(0, 0, 0, 0.4);
}

.todoapp input::input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: rgba(0, 0, 0, 0.4);
}

.todoapp h1 {
	position: absolute;
	top: -140px;
	width: 100%;
	font-size: 80px;
	font-weight: 200;
	text-align: center;
	color: #b83f45;
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
}

</style>