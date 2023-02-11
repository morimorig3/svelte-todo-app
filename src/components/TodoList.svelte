<script lang="ts">
	import Todo from './Todo.svelte';
	import type { TodoType } from '../types/index';

	export let todos: TodoType[];
</script>

<div>
	<ul>
		{#each todos as { id, isCompleted, title } (id)}
			<Todo {id} {isCompleted} {title} />
		{/each}
	</ul>
</div>
