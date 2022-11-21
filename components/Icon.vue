<template>
	<div
		v-if="name"
		@click="$emit('click')"
		:class="classColor"
		:style="{
			width: size,
			height: size,
			mask: maskValue,
			webkitMask: maskValue
		}"
	/>
</template>

<script>
export default {
	name: 'Icon',

	props: {
		name: String,

		size: {
			default: '20px',
			typr: String
		},

		classColor: {
			default: 'bg-black',
			typr: String
		}
	},

	computed: {
		maskValue() {
			return `url('${require(`@/assets/icons/${this.name}`)}') center center / contain no-repeat`;
		}
	}
};
</script>
