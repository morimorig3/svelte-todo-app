<script lang="ts">
	import Todo from './Todo.svelte';
	import type { TodoType } from '../types/index';

	export let todos: TodoType[];
	export let handleRemove: (deleteId: string) => void;
</script>

<div>
	<ul>
		{#each todos as { id, isCompleted, title } (id)}
			<Todo {id} {isCompleted} {title} {handleRemove} />
		{/each}
	</ul>
</div>

<style>
	ul {
		padding: 16px;
	}
</style>
