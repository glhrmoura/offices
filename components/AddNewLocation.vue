<template>
	<SmoothReflow class="mb-6 relative">
		<Transition name="fade">
			<button
				v-if="!create"
				@click="onCreate"
				class="flex justify-between font-light items-center outline-only-keyboard
				flex-row py-4 px-6 w-full bg-blue-400 shadow-lg rounded-2 text-base text-gray-100"
			>
				<span>Add New Location</span>

				<icon size="17px" alt="Plus icon" name="plus.svg" classColor="bg-white" />
			</button>
		</Transition>

		<Transition name="slide-fade">
			<OfficeLocationForm
				v-if="create"
				title="New Location"
				ref="officeLocationForm"
				@close="create = !create"
				@save="onSaveLocation"
			/>
		</Transition>
	</SmoothReflow>
</template>

<script>
import { offset } from '@/utils';

export default {
	name: 'AddNewLocation',

	data() {
		return {
			create: false
		};
	},

	methods: {
		onCreate() {
			this.create = true;

			this.$nextTick(() => {
				const { top } = offset(this.$refs.officeLocationForm.$el);

				window.scrollTo({ top: top - 50, behavior: 'smooth' });
			});
		},

		onSaveLocation(newLocation) {
			this.create = false;
			this.$store.dispatch('locations/addLocation', newLocation);
			this.$store.dispatch('alerts/addAlert', { message: 'LOCATION WAS CREATED.' });

			window.scrollTo({ top: 0, behavior: 'smooth' });
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
}

.fade-enter,
.fade-leave-to {
	@apply opacity-0;
}

.fade-enter-to,
.fade-leave {
	@apply opacity-100;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
	@apply transition-all duration-500;
}

.slide-fade-leave-active {
	@apply absolute w-full top-0;
}

.slide-fade-enter-to,
.slide-fade-leave {
	@apply transform translate-y-0 opacity-100;
}

.slide-fade-enter,
.slide-fade-leave-to {
	@apply transform translate-y-10 opacity-0;
}
</style>
