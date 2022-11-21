<template>
	<section class="relative transition-margin duration-500 flex flex-col w-80 m-4 mt-24 md:mt-32 mb-24">
		<Alert />

		<PageTitle title="Offices" />

		<AddNewLocation />

		<TransitionGroup tag="ul" name="fade-list" class="grid grid-cols-1 gap-6 w-full">
			<OfficeLocationCard
				:key="location.id"
				:location="location"
				v-for="location in $store.getters['locations/allLocations']"
			/>
		</TransitionGroup>
	</section>
</template>

<style scoped>
.fade-list-enter-active,
.fade-list-leave-active,
.fade-list-move {
	transition: 0.4s cubic-bezier(0.59, 0.12, 0.34, 0.95);
	transition-property: opacity, transform;
}

.fade-list-enter-active {
	transition-delay: 0.5s;
}

.fade-list-enter {
	@apply opacity-0;
	transform: scaleY(0.5);
}

.fade-list-enter-to {
	@apply opacity-100;
	transform: scaleY(1);
}

.fade-list-leave-active {
	@apply absolute;
}

.fade-list-leave-to {
	@apply opacity-0 origin-center-top;
	transform: scaleY(0);
}
</style>
