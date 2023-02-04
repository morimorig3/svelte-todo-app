<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import '../assets/css/reset.css';
</script>

<Header />
<div>
	<slot />
</div>
<Footer />

<style>
	div {
		flex: 1 1 0%;
		padding-left: 32px;
		padding-right: 32px;
		max-width: 1080px;
		width: 100%;
		margin: auto;
	}
	:global(body) {
		background-color: royalblue;
		color: #f5f5f5;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
