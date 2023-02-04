<script>
	import TodoList from './TodoList.svelte';
	const todos = [
		{
			id: 'XXXXXX',
			title: 'タスク1',
			isCompleted: false
		},
		{
			id: 'YYYYYY',
			title: 'タスク2',
			isCompleted: false
		},
		{
			id: 'ZZZZZZ',
			title: 'タスク3',
			isCompleted: false
		}
	];
</script>

<div>
	<TodoList {todos} />
</div>

<style>
	div {
		color: #333;
		background-color: #f5f5f5;
		padding: 16px;
		border-radius: 5px;
	}
</style>
