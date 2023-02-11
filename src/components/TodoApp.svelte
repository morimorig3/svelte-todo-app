<script lang="ts">
	import { todos } from '../store';
	import TodoList from './TodoList.svelte';
	import AddTodo from './AddTodo.svelte';
</script>

<div>
	<AddTodo />
	<TodoList todos={$todos} />
</div>

<style>
	div {
		color: #333;
		background-color: #f5f5f5;
		padding: 16px;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
</style>
