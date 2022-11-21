<template>
	<h1 class="text-6xl leading-2 text-blue-400 font-light mb-12 text-center">
		{{ title }}
	</h1>
</template>

<script>
export default {
	name: 'PageTitle',

	props: {
		title: String
	}
};
</script>
