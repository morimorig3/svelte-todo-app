<script>
	export let id = '';
	export let text = '';
</script>

<label for={id}>
	<input type="checkbox" {id} />
	<p>{text}</p>
</label>

<style>
	label {
		display: flex;
	}
</style>
