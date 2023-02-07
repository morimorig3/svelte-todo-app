<script lang="ts">
	import TodoList from './TodoList.svelte';
	let todos = [
		{
			id: crypto.randomUUID(),
			title: 'タスク1',
			isCompleted: false
		},
		{
			id: crypto.randomUUID(),
			title: 'タスク2',
			isCompleted: false
		},
		{
			id: crypto.randomUUID(),
			title: 'タスク3',
			isCompleted: false
		}
	];

	function handleRemove(deleteId: string) {
		todos = todos.filter(({ id }) => id !== deleteId);
	}
</script>

<div>
	<TodoList {todos} {handleRemove} />
</div>

<style>
	div {
		color: #333;
		background-color: #f5f5f5;
		padding: 16px;
		border-radius: 5px;
	}
</style>
