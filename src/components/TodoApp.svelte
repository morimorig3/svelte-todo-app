<script lang="ts">
	import { todos } from '../store';
	import TodoList from './TodoList.svelte';
	import AddTodo from './AddTodo.svelte';
</script>

<div>
	<AddTodo />
	{#if $todos.length}
		<TodoList todos={$todos} />
	{:else}
		<p>Let's add a task!</p>
	{/if}
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
	p {
		padding-top: 1em;
		padding-bottom: 1em;
		font-size: 30px;
		text-align: center;
		color: #fff;
		font-weight: bold;
		text-shadow: 0px 3px 0px #b2a98f, 0px 14px 10px rgba(0, 0, 0, 0.15),
			0px 24px 2px rgba(0, 0, 0, 0.1), 0px 34px 30px rgba(0, 0, 0, 0.1);
	}
</style>
