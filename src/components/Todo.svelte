<script lang="ts">
	export let id: string;
	export let title: string;
	export let isCompleted: boolean;
</script>

<li>
	<label for={id}>
		<input type="checkbox" checked={isCompleted} {id} />
		<p>{title}</p>
	</label>
</li>

<style>
	li {
		margin-bottom: 16px;
		padding: 16px;
		border: 1px solid rgba(149, 157, 165, 0.2);
		transition: 0.25s;
	}
	li:hover {
		border-color: transparent;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	}
	label {
		display: flex;
		gap: 8px;
	}
	p {
		font-weight: bold;
	}
</style>
