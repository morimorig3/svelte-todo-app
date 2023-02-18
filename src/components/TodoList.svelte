<script lang="ts">
	import Todo from './Todo.svelte';
	import type { TodoType } from '../types/index';

	export let todos: TodoType[];
</script>

{#if todos.length}
	<div>
		<ul>
			{#each todos as { id, title, isCompleted, isEdit } (id)}
				<Todo {id} {isCompleted} {title} {isEdit} />
			{/each}
		</ul>
	</div>
{/if}
