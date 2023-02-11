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
			{#if true}
				<p>{title}</p>
			{:else}
				<input type="text" value={title} />
			{/if}
		</div>
		<button class="edit" />
		{#if isCompleted}
			<button class="close button" on:click={() => removeTodo(id)}>×</button>
		{/if}
	</label>
</li>

<style>
	label {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
		margin-right: auto;
	}
	p {
		font-weight: bold;
		word-break: break-all;
	}
	.button {
		flex-shrink: 0;
		width: 25px;
		height: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 1;
		border: none;
		font-weight: bold;
		border-radius: 10px;
	}
	.button.close {
		background-color: red;
		color: #ffffff;
	}
	.edit {
		border: none;
		background-color: transparent;
		width: 20px;
		height: 20px;
		background-size: contain;
		background-repeat: no-repeat;
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20width%3D'24'%20height%3D'24'%20viewBox%3D'0%200%2024%2024'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Crect%20width%3D'24'%20height%3D'24'%20stroke%3D'none'%20fill%3D'%23000000'%20opacity%3D'0'%2F%3E%3Cg%20transform%3D%22matrix(1.05%200%200%201.05%2012%2012)%22%20%3E%3Cpath%20style%3D%22stroke%3A%20none%3B%20stroke-width%3A%201%3B%20stroke-dasharray%3A%20none%3B%20stroke-linecap%3A%20butt%3B%20stroke-dashoffset%3A%200%3B%20stroke-linejoin%3A%20miter%3B%20stroke-miterlimit%3A%204%3B%20fill%3A%20rgb(0%2C0%2C0)%3B%20fill-rule%3A%20nonzero%3B%20opacity%3A%201%3B%22%20transform%3D%22%20translate(-12.5%2C%20-11.5)%22%20d%3D%22M%2018.414062%202%20C%2018.158188%202%2017.902031%202.0974687%2017.707031%202.2929688%20L%2016%204%20L%2020%208%20L%2021.707031%206.2929688%20C%2022.098031%205.9019687%2022.098031%205.2689063%2021.707031%204.8789062%20L%2019.121094%202.2929688%20C%2018.925594%202.0974687%2018.669937%202%2018.414062%202%20z%20M%2014.5%205.5%20L%203%2017%20L%203%2021%20L%207%2021%20L%2018.5%209.5%20L%2014.5%205.5%20z%22%20stroke-linecap%3D%22round%22%20%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
	}
	input[type='text'] {
		color-scheme: light;
	}
</style>
