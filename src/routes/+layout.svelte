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
	}
	:global(body) {
		background-color: royalblue;
		color: #f5f5f5;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
