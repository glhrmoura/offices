<template>
	<SmoothReflow
		tag="li"
		ref="officeLocationCard"
		class="shadow-lg list-none rounded-2 bg-white sticky w-full overflow-hidden"
	>
		<Transition name="fade">
			<div v-if="!edit">
				<button
					:style="cardHeaderStyle"
					class="outline-only-keyboard transition-location-card-header shadow-lg duration-500 bg-white cursor-pointer flex w-full text-left items-center z-10 relative py-6 px-6"
					@click="openedContact = !openedContact"
					:class="{
						'rounded-2': !openedContact,
						'rounded-bl-none rounded-br-none': openedContact
					}"
				>
					<div class="flex-grow">
						<h2
							class="font-bold text-2xl leading-3 duration-500"
							:class="{
								'text-white': openedContact,
								'text-gray-900': !openedContact
							}"
						>
							{{ location.title }}
						</h2>

						<p
							class="font-normal text-1 leading-3 duration-500"
							:class="{
								'text-white': openedContact,
								'text-gray-200': !openedContact
							}"
						>
							{{ location.address }}
						</p>
					</div>

					<Icon
						size="18px"
						alt="Arrow icon"
						name="arrow.svg"
						class="duration-500"
						:classColor="openedContact ? 'bg-white' : 'bg-blue-400'"
						:class="{
							'transform -rotate-180': openedContact
						}"
					/>
				</button>

				<SmoothReflow class="relative overflow-hidden">
					<Transition name="fade-accordion">
						<div v-if="openedContact" class="flex flex-col relative bg-white py-6 px-8">
							<header>
								<h3 class="font-bold text-xl leading-3 mb-2 text-gray-900">
									{{ location.contact.name }}
								</h3>

								<p class="text-base leading-3 mb-2 text-gray-900">
									{{ location.contact.job }}
								</p>

								<p class="text-base leading-3 mb-2">
									<a
										class="text-blue-400"
										:href="`mailto:${location.contact.email}`"
									>
										{{ location.contact.email }}
									</a>
								</p>

								<p class="text-base leading-3 mb-4 text-gray-900">
									{{ location.contact.phone }}
								</p>
							</header>

							<hr class="mt-0 border-gray-100 border-solid border-t-0 border-b-1" />

							<footer class="flex justify-between mt-4">
								<button
									@click="onEdit"
									class="flex outline-only-keyboard leading-2 items-center text-xs text-gray-200"
								>
									<Icon
										size="24px"
										class="mr-2"
										alt="Pen icon"
										name="pencil.svg"
										classColor="bg-gray-200"
									/>

									<span>EDIT</span>
								</button>

								<button
									@click="onDeleteLocation"
									class="flex outline-only-keyboard leading-2 items-center text-xs text-red-200"
								>
									<Icon
										size="24px"
										class="mr-2"
										alt="Trash icon"
										name="trash.svg"
										classColor="bg-red-200"
									/>

									<span>DELETE</span>
								</button>
							</footer>
						</div>
					</Transition>
				</SmoothReflow>
			</div>
		</Transition>

		<Transition name="slide-fade">
			<office-location-form
				v-if="edit"
				:model="location"
				ref="officeLocationForm"
				title="Edit Location"
				@close="edit = false"
				@save="onSaveLocation"
			/>
		</Transition>
	</SmoothReflow>
</template>

<script>
import { offset } from '@/utils';

export default {
	name: 'OfficeLocationCard',

	data() {
		return {
			edit: false,
			openedContact: false,
		};
	},

	props: {
		location: Object,
	},

	methods: {
		onEdit() {
			this.edit = true;

			this.$nextTick(() => {
				const { top } = offset(this.$refs.officeLocationForm.$el);

				window.scrollTo({
					top: top - 50,
					behavior: 'smooth'
				});
			});
		},

		onDeleteLocation() {
			this.$store.dispatch('locations/deleteLocation', this.location);
			this.$store.dispatch('alerts/addAlert', { message: 'THE LOCATION HAS BEEN DELETED.' });
		},

		onSaveLocation(newLocation) {
			const { top } = offset(this.$refs.officeLocationCard.$el);

			this.edit = false;
			this.$store.dispatch('locations/updateLocation', newLocation);
			this.$store.dispatch('alerts/addAlert', { message: 'THE LOCATON HAS BEEN UPDATED.' });

			window.scrollTo({
				top: top - 150,
				behavior: 'smooth'
			});
		}
	},

	computed: {
		cardHeaderStyle() {
			if (!this.openedContact) return {};

			return {
				backgroundColor: this.location.color
			};
		}
	}
};
</script>

<style scoped>
.fade-accordion-enter-active,
.fade-accordion-leave-active {
	@apply transition-all duration-75;
}

.fade-accordion-leave-active {
	@apply w-full absolute overflow-hidden;
}

.fade-accordion-enter,
.fade-accordion-leave-to {
	@apply opacity-50;
}

.fade-accordion-enter-to,
.fade-accordion-leave {
	@apply opacity-100;
}

.fade-enter-active,
.fade-leave-active {
	@apply transition-all duration-300;
}

.fade-leave-active {
	@apply absolute w-full;
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
	@apply transition-all duration-300;
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
