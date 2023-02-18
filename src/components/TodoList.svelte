<script lang="ts">
	import Todo from './Todo.svelte';
	import type { TodoType } from '../types/index';

	export let todos: TodoType[];
</script>

{#if todos.length}
	<div>
		<ul>
			{#each todos as { id, title, isCompleted, isEdit, isOpenToolTip } (id)}
				<Todo {id} {isCompleted} {title} {isEdit} {isOpenToolTip} />
			{/each}
		</ul>
	</div>
{/if}
