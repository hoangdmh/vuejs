<template>
	<div id="app">
		<comp-counter />

		<counter-two />

		<counter-three />
	</div>
</template>

<script>
import CompCounter from './components/CompCounter.vue';
import CounterTwo from './components/CounterTwo.vue';
import CounterThree from './components/CounterThree';

export default {
	name: 'app',
	data () {
		return {
			
		}
	},
	components: {
		CompCounter,
		CounterTwo,
		CounterThree
	}
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	h1, h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
