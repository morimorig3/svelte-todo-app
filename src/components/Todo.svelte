<script lang="ts">
	import { slide } from 'svelte/transition';

	import { todos } from '../store';
	export let id: string;
	export let title: string;
	export let isCompleted: boolean;

	const { onCheckTodo, removeTodo } = todos;
</script>

<li transition:slide>
	<label for={id}>
		<div>
			<input type="checkbox" checked={isCompleted} {id} on:change={() => onCheckTodo(id)} />
			<p>{title}</p>
		</div>
		{#if isCompleted}
			<button on:click={() => removeTodo(id)}>×</button>
		{/if}
	</label>
</li>

<style>
	label {
		display: flex;
		justify-content: space-between;
		margin-bottom: 16px;
		padding: 16px;
		border: 1px solid rgba(149, 157, 165, 0.2);
		transition: 0.25s;
	}
	label:hover {
		background-color: #fafafa;
		border-color: transparent;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	}
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px;
	}
	p {
		font-weight: bold;
		word-break: break-all;
	}
	button {
		width: 25px;
		height: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: red;
		line-height: 1;
		border: none;
		font-weight: bold;
		color: #ffffff;
		border-radius: 10px;
	}
</style>
