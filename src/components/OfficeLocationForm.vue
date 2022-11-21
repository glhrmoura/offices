<template>
	<div
		@keydown.enter="save"
		class="w-full bg-white overflow-hidden shadow-lg rounded-2 pt-4 pb-6 px-6"
	>
		<header class="flex justify-between items-center mb-10">
			<span class="font-bold text-base leading-3 text-gray-900">
				{{ title }}
			</span>
			<span tabindex="0" @click="$emit('close')" @keydown.enter="$emit('close')">
				<Icon
					size="12px"
					alt="Close icon"
					name="close.svg"
					class="cursor-pointer"
					classColor="bg-gray-200"
				/>
			</span>
		</header>

		<FormSelectColor v-model="$v.location.color.$model" />

		<FormInput
			required
			label="Title"
			v-model="$v.location.title.$model"
			:validation-checks="[
				{
					message: 'This field cannot be empty',
					invalid: $v.location.title.$dirty && !$v.location.title.required
				}
			]"
		/>

		<FormInput
			required
			label="Enter the address"
			v-model="$v.location.address.$model"
			:validation-checks="[
				{
					message: 'This field cannot be empty',
					invalid: $v.location.address.$dirty && !$v.location.address.required
				}
			]"
		/>

		<div class="text-blue-400 mb-6 text-xs">
			<span class="inline-block mb-4">
				CONTACT INFORMATION
			</span>
			<hr class="border-gray-100" />
		</div>

		<FormInput
			required
			label="Full name"
			v-model="$v.location.contact.name.$model"
			:validation-checks="[
				{
					message: 'This field cannot be empty',
					invalid: $v.location.contact.name.$dirty && !$v.location.contact.name.required
				}
			]"
		/>

		<FormInput
			required
			label="Job Position"
			v-model="$v.location.contact.job.$model"
			:validation-checks="[
				{
					message: 'This field cannot be empty',
					invalid: $v.location.contact.job.$dirty && !$v.location.contact.job.required
				}
			]"
		/>

		<FormInput
			required
			type="email"
			label="Email address"
			placeholder="name@example.com"
			v-model="$v.location.contact.email.$model"
			:validation-checks="[
				{
					message: 'Invalid email address',
					invalid: $v.location.contact.email.$dirty && !$v.location.contact.email.emailValid
				},
				{
					message: 'This field cannot be empty',
					invalid: $v.location.contact.email.$dirty && !$v.location.contact.email.required
				}
			]"
		/>

		<FormInput
			required
			label="Phone"
			:mask="'(###) ###-####'"
			placeholder="(xxx) xxx-xxxx"
			v-model="$v.location.contact.phone.$model"
			:validation-checks="[
				{
					message: 'Invalid phone number',
					invalid: $v.location.contact.phone.$dirty && !$v.location.contact.phone.minLength
				},
				{
					message: 'This field cannot be empty',
					invalid: $v.location.contact.phone.$dirty && !$v.location.contact.phone.required
				}
			]"
		/>

		<button
			:disabled="$v.location.$invalid"
			class="transition bg duration-500 disabled:pointer-events-none
			disabled:opacity-50 disabled:bg-gray-200 bg-blue-400 py-2 px-4 rounded-1 my-3
			mx-0 text-white select-none"
			@click="save"
		>
			Save
		</button>
	</div>
</template>

<script>
import { genID, deepClone } from '@/utils';
import { required } from 'vuelidate/lib/validators';

export default {
	name: 'OfficeLocationForm',

	data() {
		return {
			location: {}
		};
	},

	props: {
		title: {
			type: String,
			default: 'Office location form'
		},

		model: {
			type: Object,
			default: () => ({
				id: genID(),
				color: '#FFC062',
				title: '',
				address: '',
				contact: {
					name: '',
					email: '',
					phone: '',
					job: ''
				}
			})
		}
	},

	created() {
		this.location = deepClone(this.model);
	},

	methods: {
		save() {
			this.$v.$touch();

			if (this.$v.location.$invalid) {
				return;
			}

			this.$emit('save', this.location);
		}
	},

	validations: {
		location: {
			title: {
				required
			},

			color: {
				required
			},

			address: {
				required
			},

			contact: {
				name: {
					required
				},
				email: {
					required,
					emailValid(value) {
						const rg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
						return rg.test(value);
					}
				},
				phone: {
					required,
					minLength: value => {
						return value.length >= 14;
					}
				},
				job: {
					required
				}
			}
		}
	}
};
</script>
