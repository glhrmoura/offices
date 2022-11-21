<template>
	<Transition tag="div" name="slide">
		<div
			v-if="$store.getters['alerts/hasAlerts']"
			class="flex shadow-sm text-xs overflow-hidden z-50 flex-col border-t-2
			border-t-solid border-blue-400 justify-center items-center fixed bg-white w-full
			top-0 left-0 py-5"
		>
			<TransitionGroup tag="div" name="fade-list">
				<div
					class="my-2 flex items-center"
					:key="alert.id"
					v-for="alert in $store.getters['alerts/allAlerts']"
				>
					<Icon
						size="18px"
						class="mr-4"
						alt="Check icon"
						name="check-green.svg"
						classColor="bg-blue-400"
					/>
					{{ alert.message }}
				</div>
			</TransitionGroup>

			<Icon
				size="12px"
				alt="Close icon"
				name="close.svg"
				classColor="bg-gray-200"
				class="mr-4 cursor-pointer absolute top-50 right-8"
				@click="$store.dispatch('alerts/deleteAll')"
			/>
		</div>
	</Transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s;
}
.slide-enter,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-300px);
}

.fade-list-enter-active,
.fade-list-leave-active,
.fade-list-move {
	transition: 0.4s cubic-bezier(0.59, 0.12, 0.34, 0.95);
	transition-property: opacity, transform;
}

.fade-list-enter {
	@apply opacity-0;
	transform: translateX(50px) scaleY(0.5);
}

.fade-list-enter-to {
	@apply opacity-100;
	transform: translateX(0) scaleY(1);
}

.fade-list-leave {
	transform: scaleY(1);
}

.fade-list-leave-to {
	@apply opacity-0 origin-center-top;
	transform: scaleY(0);
}
</style>
