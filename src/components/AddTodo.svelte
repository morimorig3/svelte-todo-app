<script lang="ts">
	import { ADD_TODO_TEXT_BOX_PLACEHOLDER, VALIDATION_MESSAGE_BLANK_TEXT } from '../param/const';
	import { inputValue, appState, todos, errors } from '../store';

	const { addTodo } = todos;

	function onKeydownEnter({ metaKey, ctrlKey, key }: KeyboardEvent) {
		const isCommand = !ctrlKey && metaKey;
		const isControl = ctrlKey && !metaKey;
		const isEnter = key === 'Enter';
		if (isEnter && (isCommand || isControl)) return onClick();
	}

	function onClick() {
		if (!$inputValue)
			return appState.update((appState) => ({
				...appState,
				errors: [VALIDATION_MESSAGE_BLANK_TEXT]
			}));
		addTodo($inputValue);
		inputValue.set('');
	}
</script>

<div>
	<div class="inner">
		<input
			placeholder={ADD_TODO_TEXT_BOX_PLACEHOLDER}
			type="text"
			bind:value={$inputValue}
			on:keydown={onKeydownEnter}
			on:input={() =>
				appState.update((appState) => ({
					...appState,
					errors: []
				}))}
		/><button on:click={onClick}>Add</button>
	</div>
	{#if $appState.errors}
		<p class="error">{$appState.errors}</p>
	{/if}
</div>

<style>
	input,
	button {
		color-scheme: light;
	}
	.inner {
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
	.error {
		color: red;
		line-height: 2;
	}
</style>
