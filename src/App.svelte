
<script>
	
	import Header from "./components/header.svelte";
  	import Modal from "./components/modal.svelte";
	import Homepage from "./pages/homepage.svelte";
  	import Home from "./routes/Home.svelte";
	
</script>

<main>
	
	<Modal/>
	<Header/>
	<Homepage/>
	<Home/>
	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>