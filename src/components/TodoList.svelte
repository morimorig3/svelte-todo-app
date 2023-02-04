<script lang="ts">
	import Todo from './Todo.svelte';
	import type { TodoType } from '../types/index';

	export let todos: TodoType[];
</script>

<div>
	<ul>
		{#each todos as { id, isCompleted, title }}
			<Todo {id} {isCompleted} {title} />
		{/each}
	</ul>
</div>

<style>
	ul {
		padding: 16px;
	}
</style>
