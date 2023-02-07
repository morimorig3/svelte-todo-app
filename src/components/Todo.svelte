<script lang="ts">
	export let id: string;
	export let title: string;
	export let isCompleted: boolean;
	export let handleRemove: (deleteId: string) => void;
	function onChange() {
		isCompleted = !isCompleted;
	}
</script>

<li>
	<label for={id}>
		<div>
			<input type="checkbox" checked={isCompleted} {id} on:change={onChange} />
			<p>{title}</p>
		</div>
		{#if isCompleted}
			<button on:click={() => handleRemove(id)}>delete</button>
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
		border-color: transparent;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	}
	div {
		display: flex;
		justify-content: space-between;
		gap: 8px;
	}
	p {
		font-weight: bold;
	}
</style>
