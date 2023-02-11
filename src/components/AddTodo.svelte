<script lang="ts">
	export let addTodo: (title: string) => void;
	let value: string;
</script>

<div>
	<input type="text" bind:value /><button on:click={() => addTodo(value)}>Add</button>
</div>

<style>
	input,
	button {
		color-scheme: light;
	}
	div {
		display: flex;
		gap: 4px;
	}
	input {
		font-size: 16px;
		flex: 1 1 auto;
		height: 40px;
		line-height: 40px;
		padding-left: 0.5em;
		padding-right: 0.5em;
		border: 1px solid #333;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	button {
		border: 2px solid #16a34a;
		background-color: #86efac;
		color: #16a34a;
		font-weight: bold;
		padding-left: 1em;
		padding-right: 1em;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		transition: 0.25s;
	}
	button:hover {
		background-color: #16a34a;
		color: #f5f5f5;
	}
</style>
