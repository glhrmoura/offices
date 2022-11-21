<template>
	<div class="mb-6">
		<button
			:style="{ backgroundColor: color }"
			class="select-color__color outline-only-keyboard"
			@click="toggleColors"
			@keydown.enter="toggleColors"
		>
			<span>
				Select Color
			</span>

			<Icon
				size="14px"
				alt="Arrow icon"
				name="arrow-sm.svg"
				class="ml-3 transform transition-transform duration-500"
				classColor="bg-white"
				:class="{
					'rotate-180': !showColors,
					'transform rotate-0': showColors
				}"
			/>
		</button>

		<SmoothReflow class="flex relative flex-col overflow-hidden">
			<Transition name="fade">
				<div class="w-full" v-if="showColors">
					<button
						:key="color"
						v-for="color in colors"
						class="select-color__color outline-only-keyboard"
						@click="selectColor(color)"
						@keydown.enter="selectColor(color)"
						:style="{ backgroundColor: color }"
					>
						<span v-if="isSelected(color)">
							<Icon size="26px" alt="Arrow icon" name="check.svg" class="bg-white" />
						</span>
					</button>
				</div>
			</Transition>
		</SmoothReflow>
	</div>
</template>

<script>
export default {
	name: 'FormSelectColor',

	model: {
		prop: 'color'
	},

	data() {
		return {
			showColors: false,
			colors: ['#FFC062', '#FF7B92', '#33A6BA', '#989EA7', '#313E4F']
		};
	},

	props: {
		color: {
			type: String,
			default: '#FFC062'
		}
	},

	methods: {
		toggleColors() {
			this.showColors = !this.showColors;
		},

		selectColor(color) {
			this.$emit('input', color);
			this.showColors = false;
		},

		isSelected(color) {
			return this.color === color;
		}
	}
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	@apply transition-all duration-500;
}

.fade-leave-active {
	@apply absolute;
	position: absolute;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-to,
.fade-leave {
	opacity: 1;
}

.select-color__color {
	@apply font-bold text-base leading-3 text-white flex justify-center mb-4 items-center h-32 w-full bg-yellow-400 shadow-lg rounded-2 transition duration-500;
}
</style>
