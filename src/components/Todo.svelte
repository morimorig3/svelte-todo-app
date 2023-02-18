<script lang="ts">
	import { stop_propagation } from 'svelte/internal';
	import { fade, slide } from 'svelte/transition';

	import { todos } from '../store';
	import TodoOptions from './TodoOptions.svelte';
	export let id: string;
	export let title: string;
	export let isCompleted: boolean;
	export let isEdit: boolean;
	export let isOpenToolTip: boolean;

	const { onCheckTodo, removeTodo, toggleIsEdit, exitEditMode, updateTitle, toggleIsOpenToolTip } =
		todos;

	function onEditTitle(event: Event) {
		const target = event.target as HTMLInputElement;
		title = target.value;
	}
	function onBlurEditInput(id: string, title: string) {
		updateTitle(id, title);
		exitEditMode();
	}
</script>

<li transition:slide>
	<label class="todo" for={id}>
		<div class="todo__body">
			<input type="checkbox" checked={isCompleted} {id} on:change={() => onCheckTodo(id)} />
			{#if isEdit}
				<input
					id={`${id}_edit`}
					class="todo__title"
					type="text"
					value={title}
					on:change={onEditTitle}
					on:blur={() => onBlurEditInput(id, title)}
				/>
			{:else}
				<p class="todo__title">{title}</p>
			{/if}
		</div>
		<button class="option-button" on:click={() => toggleIsOpenToolTip(id)}>
			<TodoOptions />
			{#if isOpenToolTip}
				<div class="option-button__tooltip">
					<button
						class="tooltip__options"
						on:click|stopPropagation={() => {
							toggleIsEdit(id);
							toggleIsOpenToolTip(id);
						}}>Edit</button
					>
				</div>
			{/if}
		</button>
		{#if isCompleted}
			<button
				transition:fade={{ duration: 100 }}
				class="close-button"
				on:click={() => removeTodo(id)}
			/>
		{/if}
	</label>
</li>

<style>
	button {
		background-color: transparent;
		border: none;
	}
	.todo {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		gap: 16px;
		margin-bottom: 16px;
		padding: 16px;
		border: 1px solid rgba(149, 157, 165, 0.2);
		transition: 0.25s;
	}
	.todo:hover {
		background-color: #fafafa;
		border-color: transparent;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	}
	.todo__body {
		display: flex;
		flex-grow: 1;
		align-items: center;
		gap: 8px;
		margin-right: auto;
	}
	.todo__title {
		width: 100%;
		font-weight: bold;
		word-break: break-all;
	}
	.close-button {
		position: absolute;
		top: -10px;
		right: -10px;
		border-radius: 100vh;
		width: 25px;
		height: 25px;
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%222%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D'%23ef4444'%20d%3D%22m12.002%202.005c5.518%200%209.998%204.48%209.998%209.997%200%205.518-4.48%209.998-9.998%209.998-5.517%200-9.997-4.48-9.997-9.998%200-5.517%204.48-9.997%209.997-9.997zm0%208.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404%200-.75.324-.75.749%200%20.193.073.384.219.531l2.722%202.722-2.728%202.728c-.147.147-.22.34-.22.531%200%20.427.35.75.751.75.192%200%20.384-.073.53-.219l2.728-2.728%202.729%202.728c.146.146.338.219.53.219.401%200%20.75-.323.75-.75%200-.191-.073-.384-.22-.531l-2.727-2.728%202.717-2.717c.146-.147.219-.338.219-.531%200-.425-.346-.75-.75-.75-.192%200-.385.073-.531.22z%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fsvg%3E");
	}
	.option-button {
		position: relative;
		width: 25px;
		height: 25px;
	}
	.option-button__tooltip {
		position: absolute;
		min-width: 120px;
		top: 13px;
		right: 13px;
		background-color: #fafafa;
		border-color: transparent;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	}
	.tooltip__options {
		font-size: 14px;
		width: 100%;
		padding: 8px;
	}
	.tooltip__options:hover {
		background-color: #f5f5f5;
	}
	input[type='text'] {
		color-scheme: light;
	}
</style>
