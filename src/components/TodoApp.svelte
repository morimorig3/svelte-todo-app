<script lang="ts">
	import TodoList from './TodoList.svelte';
	import AddTodo from './AddTodo.svelte';
	import type { TodoType } from '../types';
	const text = 'aiueo';
	let todos: TodoType[] = [
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

	/**
	 * タスクを削除する
	 */
	function handleRemove(deleteId: string) {
		todos = todos.filter(({ id }) => id !== deleteId);
	}
	/**
	 * チェックボックスのトグルハンドラ
	 */
	function handleChange(changeId: string) {
		todos = todos.map((todo) =>
			todo.id === changeId
				? {
						...todo,
						isCompleted: !todo.isCompleted
				  }
				: todo
		);
	}
	/**
	 * タスクを追加する
	 */
	function addTodo(title: string) {
		const todo: TodoType = {
			id: crypto.randomUUID(),
			isCompleted: false,
			title
		};
		todos = [...todos, todo];
	}
</script>

<div>
	<AddTodo {addTodo} />
	<TodoList {todos} {handleRemove} {handleChange} />
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
